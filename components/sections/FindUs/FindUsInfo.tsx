import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import ContactItem from "./ContactItem";
import { bakery } from "@/constants/bakery";

export default function FindUsInfo() {
  return (
    <div className="flex min-h-[350px] flex-col rounded-3xl border border-[#E8D5BE] bg-white p-8 shadow-lg">
      <h3 className="font-serif text-2xl font-semibold text-[#3E2723]">
        {bakery.name}
      </h3>

      <div className="mt-6 space-y-5">
        <ContactItem
          icon={MapPin}
          title="Address"
          lines={["Brgy. Tiring", "Cabatuan, Iloilo", "Philippines"]}
        />

        <ContactItem
          icon={Clock3}
          title="Hours"
          lines={[
            "Mon – Fri   7:00 am – 5:00 pm",
            "Saturday   7:00 am – 3:00 pm",
            "Sunday   Closed",
          ]}
        />

        <ContactItem icon={Phone} title="Phone" lines={["(416) 555-0182"]} />

        <ContactItem
          icon={Mail}
          title="Email"
          lines={["hello@karensbakeshop.com"]}
        />
      </div>

      <a
        href={bakery.directions}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex w-full items-center justify-center rounded-full bg-[#8A4B27] py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6E3B1E] hover:scale-[1.02] active:scale-95"
      >
        Get Directions
      </a>
    </div>
  );
}
