'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const authSchema = z.object({
  email: z.string().email("Por favor, insira um e-mail válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export default function LoginPage() {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  })

  function onSubmit(values: z.infer<typeof authSchema>) {
    console.log("Tentativa de acesso:", values)
    alert("Dados validados! Pronto para conectar ao servidor.")
  }

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50 p-6">
      <Card className="w-full max-w-md border-zinc-200 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">Obras Brasil</CardTitle>
          <CardDescription>Gestão inteligente de obras</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-700">E-mail Corporativo</FormLabel>
                    <FormControl><Input placeholder="seu@email.com" {...field} /></FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-700">Senha de Acesso</FormLabel>
                    <FormControl><Input type="password" placeholder="••••••" {...field} /></FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all">
                Acessar Painel
            </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}