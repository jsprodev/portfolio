import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { toast } from "sonner";
import { X } from "lucide-react";

export const Contact = () => {
  let [isSending, setisSending] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setisSending(true);
    emailjs
      .sendForm("service_px0i9xj", "template_bfzwu8c", form.current, {
        publicKey: "Twyai0LW-pI5Jn_QN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent", {
            description: "Thank you for reaching out! I'll get back to you soon.",
            action: {
              label: <X size={14} />,
            },
            duration: 5000,
            classNames: {
              toast: "text-emerald-700 dark:text-emerald-400",
              icon: "bg-emerald-400 dark:bg-emerald-800",
            },
          });
          setisSending(false);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Message Failed", {
            description: `Something went wrong, please try again later.`,
            action: {
              label: <X size={14} />,
            },
            duration: 5000,
            classNames: {
              toast: "text-red-700 dark:text-red-400",
              icon: "bg-red-400 dark:bg-red-800",
            },
          });
          setisSending(false);
        }
      );
  };

  return (
    <section id="contact" className="flex flex-row flex-wrap gap-10 justify-center items-center">
      <div className="md:w-[calc(50%-20px)] space-y-10">
        <h1>Lets Get In Touch</h1>
        <p className="text-muted-foreground">
          Have a question or want to work together? Feel free to drop me a message. I'd love to hear from you :)
        </p>
        <div className="space-y-7">
          <p className="flex items-center space-x-3">
            <MapPin className="text-blue-600 text-center" size={20} />
            <span className="text-muted-foreground">Islamabad, Pakistan</span>
          </p>

          <p className="flex items-center space-x-3">
            <Phone className="text-blue-600" size={20} />
            <a className="text-muted-foreground" href="tel:+92 313 5106046">
              +92 313 5106046
            </a>
          </p>

          <p className="flex items-center space-x-3">
            <Mail className="text-blue-600" size={20} />
            <a className="text-muted-foreground" href="mailto:jsprodev@gmail.com">
              jsprodev@gmail.com
            </a>
          </p>

          <h3 className="font-semibold text-md text-gray-600 p-0 mb-5">Connect with me</h3>
          <div className="inline-flex items-center space-x-4">
            <a
              className="rounded-full bg-gray-400/20 hover:bg-gray-400/30 p-3 text-muted-foreground"
              href="https://www.linkedin.com/in/hashimkhalid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              className="rounded-full bg-gray-400/20 hover:bg-gray-400/30 p-3 text-muted-foreground"
              href="https://github.com/jsprodev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-[calc(50%-20px)] w-full">
        <div className="bg-card rounded-2xl border text-muted-foreground tracking-wide text-sm p-6 shadow-card hover:shadow-card-hover">
          <form className="space-y-7" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                name="user_name"
                required
                type="text"
                placeholder="John Doe"
                className="block w-full p-3 bg-white dark:bg-card border border-slate-300 dark:border-slate-600 rounded-lg dark:focus:bg-card focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none dark:focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <input
                name="user_email"
                required
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full p-3 bg-white dark:bg-card border border-slate-300 dark:border-slate-600 rounded-lg dark:focus:bg-card focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none dark:focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                required
                placeholder="Message"
                className="h-40 block w-full p-3 bg-white dark:bg-card border border-slate-300 dark:border-slate-600 rounded-lg dark:focus:bg-card focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none dark:focus:border-blue-600"
              ></textarea>
            </div>
            {!isSending ? (
              <button className="btn-primary w-full">send message</button>
            ) : (
              <button className="btn-primary w-full disabled:bg-blue-300 disabled:cursor-progress" disabled>
                sending...
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
