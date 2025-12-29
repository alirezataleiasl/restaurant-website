import Image from "next/image";

export default function Home() {
  return (
   <div className="p-10 space-y-10">
      {/* تست انگلیسی به سبک Una Pizza */}
      <div className="text-center">
        <h1 className="font-serif text-8xl uppercase tracking-tighter">
          Pizza
        </h1>
        <p className="font-serif text-xl italic">Napoletana in New York</p>
      </div>

      <hr />

      {/* تست فارسی */}
      <div className="text-center" dir="rtl">
        <h1 className="font-sans text-6xl font-black">
          پیتزا لذیذ اصیل
        </h1>
        <p className="font-sans text-xl mt-4">
          تجربه‌ای متفاوت از پیتزای تنوری با متد 
        </p>
        <p className="font-sans text-2xl mt-2 font-bold">
          ۱۲۳,۴۵۶ تومان
        </p>
      </div>
    </div>
  );
}
