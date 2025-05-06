import { useActionState, useState } from "react";
import { addToCart } from "./actions.js";

function AddToCartForm({itemID, itemTitle}) {
  const [message, formAction, isPending] = useActionState(addToCart, null);
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
    </form>
  );
}

export default function Dummy() {
  return (
    <>
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
    </>
  )
}





























{/*********import {React, useState} from "react";
export default function ColorChanger() {
    const [bgColor, setBgColor] = useState("White");
  
    return (
      <div style={{ backgroundColor: bgColor, padding: "20px", textAlign: "center" }}>
        <h1>Background color: {bgColor} </h1>
        <button onClick={() => setBgColor("blue")}>Blue</button>
        <button onClick={() => setBgColor("yellow")}>Yellow</button>
        <button onClick={() => setBgColor("green")}>Green</button>
        <button onClick={() => setBgColor("pink")}>Pink</button>
      </div>
    );
  }***********/}

{/****import React from 'react'
import { useState } from "react";

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

 
export default function TodoList(){
    return(
        <div className='container main-div'>            
           <h1>To Do list for {formatDate(today)}</h1>
        </div>
    )
}*****/}
