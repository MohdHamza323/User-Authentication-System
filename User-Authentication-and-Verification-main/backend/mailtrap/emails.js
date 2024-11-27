import { response } from "express";
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE,PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"

        })

        console.log("Email sent successfully", response);

    } catch (error) {
        console.error(`Error sending email`, error);
        throw new Error(`Error sending email : ${error}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
       const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "4da90bcd-0ff4-4a5f-b628-dd9df5041413",
            template_variables: {
                company_info_name: "Green Thumb Garden",
                name: name,
            },
        });
        console.log("Email sent welcome Seccessfully",response);
    }catch(error){
         throw new Error(`Error sending welcome email : ${error}`);
    }
}


export const sendPasswordResetEmail=async (email,resetURL)=>{
      const recipient=[{email}];

      try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category:"Password Reset",
        })
      }catch(error){
           console.log("Error sening reset mail",error);
           throw new Error(`Error sending password reset email ${error}`);
      }
}


export const sendResetSuccessEmail=async (email)=>{
      const recipient=[{email}];

      try{
        const response= await mailtrapClient.send({
            from: sender,
            to:recipient,
            subject:"Password Reset successfull",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset",
        })
       
      }catch(error){
        throw new Error(`Error sending password reset success email:${error} `)
      }
}