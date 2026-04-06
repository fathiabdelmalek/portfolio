declare module '@emailjs/browser' {
  export default function emailjs(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, string>,
    publicKey: string
  ): Promise<{ status: number; text: string }>;
}
