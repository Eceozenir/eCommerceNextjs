"use server"

import { redirect } from "next/navigation";

export async function filterProducts(formData){
    console.log(formData);
    const productName = formData.get('productName');
    const category = formData.get("category");
    if(productName){
        return redirect(`urunler?productName=${productName}`);
    }
}