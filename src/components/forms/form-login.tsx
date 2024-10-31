'use client'

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { loginSchema } from '@/lib/zod'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const FormLogInComponent = () => {

    // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>

      {/* COMPONENTE: FormLogIn*/}
      <div className={`flex flex-col gap-8`}>

        <h1 className={`text-2xl md:text-3xl font-bold`}>Log-In</h1>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input 
                            type="email"
                            placeholder="email" 
                            {...field} 
                        />
                    </FormControl>

                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input 
                            type="password"
                            placeholder="password" 
                            {...field} 
                        />
                    </FormControl>

                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Enviar</Button>
            </form>
        </Form>

      </div>
    </>
  )
}