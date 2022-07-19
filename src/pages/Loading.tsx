import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Loading() {
  return(
    <div className="flex flex-col min-h-screen">
    <Header />
    <body className="flex justify-center mt-5 flex-grow">
      <div className="w-24 h-24 
              border-8 
              border-t-gray-500 
              border-r-blue-500 
              border-b-red-500 
              border-l-green-500 
              rounded-full 
              animate-spin">
      </div>
    </body>
    <Footer />
    </div>
  )
}