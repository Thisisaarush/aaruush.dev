"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"

// Exchange rates relative to USD (approximate rates - update periodically)
export const exchangeRates: Record<
  string,
  { rate: number; symbol: string; code: string }
> = {
  US: { rate: 1, symbol: "$", code: "USD" },
  IN: { rate: 83, symbol: "₹", code: "INR" },
  GB: { rate: 0.79, symbol: "£", code: "GBP" },
  EU: { rate: 0.92, symbol: "€", code: "EUR" },
  DE: { rate: 0.92, symbol: "€", code: "EUR" },
  FR: { rate: 0.92, symbol: "€", code: "EUR" },
  IT: { rate: 0.92, symbol: "€", code: "EUR" },
  ES: { rate: 0.92, symbol: "€", code: "EUR" },
  NL: { rate: 0.92, symbol: "€", code: "EUR" },
  CA: { rate: 1.36, symbol: "C$", code: "CAD" },
  AU: { rate: 1.53, symbol: "A$", code: "AUD" },
  JP: { rate: 148, symbol: "¥", code: "JPY" },
  CN: { rate: 7.2, symbol: "¥", code: "CNY" },
  BR: { rate: 4.97, symbol: "R$", code: "BRL" },
  MX: { rate: 17.2, symbol: "$", code: "MXN" },
  AE: { rate: 3.67, symbol: "د.إ", code: "AED" },
  SG: { rate: 1.34, symbol: "S$", code: "SGD" },
  CH: { rate: 0.88, symbol: "CHF", code: "CHF" },
  SE: { rate: 10.4, symbol: "kr", code: "SEK" },
  PL: { rate: 4.0, symbol: "zł", code: "PLN" },
  ZA: { rate: 18.5, symbol: "R", code: "ZAR" },
  KR: { rate: 1320, symbol: "₩", code: "KRW" },
  RU: { rate: 92, symbol: "₽", code: "RUB" },
  PK: { rate: 278, symbol: "₨", code: "PKR" },
  BD: { rate: 110, symbol: "৳", code: "BDT" },
  NG: { rate: 1550, symbol: "₦", code: "NGN" },
}

type Currency = { rate: number; symbol: string; code: string }

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  countryCode: string
  setCountryCode: (code: string) => void
  loading: boolean
  formatPrice: (usdAmount: number) => string
  toggleCurrency: () => void
  isShowingUSD: boolean
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
)

export function formatPriceValue(
  price: number,
  symbol: string,
  code: string,
): string {
  const largeValueCurrencies = ["JPY", "KRW", "INR", "PKR", "BDT", "NGN", "RUB"]

  if (largeValueCurrencies.includes(code)) {
    if (price >= 10000) {
      const rounded = Math.round(price / 1000) * 1000
      return `${symbol}${rounded.toLocaleString()}`
    }
    return `${symbol}${Math.round(price).toLocaleString()}`
  }

  if (price >= 1000) {
    return `${symbol}${Math.round(price).toLocaleString()}`
  }

  return `${symbol}${price.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(exchangeRates.US)
  const [countryCode, setCountryCode] = useState("US")
  const [originalCurrency, setOriginalCurrency] = useState<Currency>(
    exchangeRates.US,
  )
  const [originalCountryCode, setOriginalCountryCode] = useState("US")
  const [isShowingUSD, setIsShowingUSD] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function detectCountry() {
      try {
        const response = await fetch("https://ipapi.co/json/", {
          cache: "force-cache",
        })
        const data = await response.json()

        if (data.country_code && exchangeRates[data.country_code]) {
          setCurrency(exchangeRates[data.country_code])
          setCountryCode(data.country_code)
          setOriginalCurrency(exchangeRates[data.country_code])
          setOriginalCountryCode(data.country_code)
        }
      } catch {
        console.log("Country detection failed, using USD")
      } finally {
        setLoading(false)
      }
    }

    detectCountry()
  }, [])

  const formatPrice = (usdAmount: number): string => {
    const convertedPrice = usdAmount * currency.rate
    return formatPriceValue(convertedPrice, currency.symbol, currency.code)
  }

  const toggleCurrency = () => {
    if (isShowingUSD) {
      // Switch back to local currency
      setCurrency(originalCurrency)
      setCountryCode(originalCountryCode)
      setIsShowingUSD(false)
    } else {
      // Switch to USD
      setCurrency(exchangeRates.US)
      setCountryCode("US")
      setIsShowingUSD(true)
    }
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        countryCode,
        setCountryCode,
        loading,
        formatPrice,
        toggleCurrency,
        isShowingUSD,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
