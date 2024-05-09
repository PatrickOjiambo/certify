"use client"
import { useWriteContract } from 'wagmi'
import { abi } from '../abi.json'
import { useState } from 'react'

export default function TestTransaction() {
    const { data: hash, writeContract } = useWriteContract()

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const to = formData.get('address') as `0x${string}`
        const tokenURI = formData.get('tokenURI') as string

        writeContract({
            address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
            abi,
            functionName: 'mintCert',
            args: [to, tokenURI],
          });
      }
    
    return (
        <form onSubmit={submit}>
          <input name="address" placeholder="0xA0Cf…251e" required />
          <input name="tokenURI" placeholder="0.05" required />
          <button type="submit" className='bg-white'>Send</button>
          {hash && <div>Transaction Hash: {hash}</div>}
        </form>
      )
}