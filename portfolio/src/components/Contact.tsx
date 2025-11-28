import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from "./footer";
import CopyButton from './copyToClipboard';

export default function Contact() {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(  import.meta.env.VITE_EMAILJS_SERVICE_ID,
                  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

         form.current!, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

        },
      );
  };

  return (
    <section id="contact" className="bg-white">
      <div className="bg-background-light dark:bg-background-dark font-display">
        
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-2xl">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white sm:text-5xl">
                Get In Touch
              </h1>
              <p className="mt-3 text-base font-normal leading-normal text-slate-600 dark:text-[#90a4cb]">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of an ambitious vision. Feel free to
                reach out.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-[#314368] bg-white dark:bg-[#182234]/50 p-6 sm:p-8">
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <label className="flex flex-col">
                    <p className="pb-2 text-base font-medium text-slate-800 dark:text-white">
                      Full Name
                    </p>
                    <input
                      className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-background-light p-3 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-[#314368] dark:bg-[#182234] dark:text-white dark:placeholder:text-[#90a4cb] dark:focus:border-primary"
                      placeholder="Enter your full name"
                      type="text"
                      name='user_name'
                    />
                  </label>
                  <label className="flex flex-col">
                    <p className="pb-2 text-base font-medium text-slate-800 dark:text-white">
                      Email Address
                    </p>
                    <input
                      className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-background-light p-3 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-[#314368] dark:bg-[#182234] dark:text-white dark:placeholder:text-[#90a4cb] dark:focus:border-primary"
                      placeholder="Enter your email address"
                      type="email"
                      name='user_email'
                    />
                  </label>
                </div>
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-slate-800 dark:text-white">
                    Your Message
                  </p>
                  <textarea
                    className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg border border-slate-300 bg-background-light p-3 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-[#314368] dark:bg-[#182234] dark:text-white dark:placeholder:text-[#90a4cb] dark:focus:border-primary"
                    min-h="120px"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </label>
                <input
                  type="submit"
                  value="Send"
                  className="h-12  cursor-pointer rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                />
              
              </form>
            </div>
            <div className="mt-10 text-center">
              <p className="mb-4 text-base font-medium text-slate-800 dark:text-white">
                Connect with me
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  aria-label="LinkedIn Profile"
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-slate-200/80 transition-colors hover:bg-primary/10 dark:bg-white/10 dark:hover:bg-primary/20"
                  href="https://www.linkedin.com/in/ahmed-issa-b202281a6/"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 text-slate-600 transition-colors group-hover:text-primary dark:text-slate-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.4 1.4 0 0013 14.19a1.38 1.38 0 000 .81V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.1 1.16 3.1 4.26z"></path>
                  </svg>
                </a>
                <a
                  aria-label="GitHub Profile"
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-slate-200/80 transition-colors hover:bg-primary/10 dark:bg-white/10 dark:hover:bg-primary/20"
                  href="https://github.com/Ahmed-Is3a"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 text-slate-600 transition-colors group-hover:text-primary dark:text-slate-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  aria-label="X/Twitter Profile"
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-slate-200/80 transition-colors hover:bg-primary/10 dark:bg-white/10 dark:hover:bg-primary/20"
                  href="https://x.com/ahmedissa0011"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 text-slate-600 transition-colors group-hover:text-primary dark:text-slate-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
              </div>
              <div className="mt-8">
                <div className="group relative mx-auto inline-flex items-center justify-center gap-2 rounded-lg bg-slate-200/80 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors dark:bg-white/10 dark:text-slate-300">
                  <span className="material-symbols-outlined text-base leading-none">
                    mail
                  </span>
                  <span>ahmedissaten@gmail.com</span>
                  <CopyButton text="ahmedissaten@gmail.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
