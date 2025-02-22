import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   navigate('/')
  //   // Handle login logic here
    
  // }

  return (
    <div className="min-h-screen min-w-full relative flex items-center justify-center bg-[url('/src/assets/image/coverpage.png')]">
      <div className="z-10 w-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
        <div className="text-white space-y-4 text-center md:text-left w-6/12">
          <h1 className="text-4xl  md:text-5xl lg:text-7xl font-bold !leading-[96px]">
            " Experience
            <br />
            AI-Driven Corrosion 
            <br />
            Inspection "
          </h1>
        </div>

        <Card className="w-full md:max-w-[500px] py-4 shadow-xl bg-white">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="text-xl text-center space-x-1">
                <span className="text-muted-foreground">Don&apos;t have an account?</span>
                <a href="/signup" className="text-blue-600 hover:underline font-medium">
                  Sign Up
                </a>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                 className="!text-input !rounded-[4px] !p-4"
                  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-base font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                   className="!text-input !rounded-[4px] !p-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="text-right">
                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white !text-xl !py-5" onClick={()=>navigate('/dashboard')}>
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
