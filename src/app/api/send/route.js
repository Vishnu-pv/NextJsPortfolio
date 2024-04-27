import EmailTemplate  from "@/components/EmailTemplate";
import { Resend } from 'resend';
import {NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req){
    const json = req.json()
    const { name, email, message } = await json
    console.log(email)
    console.log(message)
    try{
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['vishnupv00143@gmail.com'],
            subject: `New Message From ${name}!`,
            react: EmailTemplate({email,message})
        })
        console.log(data)
        return NextResponse.json(data)
    }catch (error){
        console.log(error)
        return NextResponse.json({error})
    }
}