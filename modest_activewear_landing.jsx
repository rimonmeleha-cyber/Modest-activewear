import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Star, ShieldCheck, Leaf, Sparkles, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Single‑file React landing page for a modest activewear brand.
 *
 * ✅ Ready to preview. Uses Tailwind + shadcn/ui + Framer Motion + Lucide icons.
 * ✅ RTL Hebrew by default. Swap BRAND_NAME/LOGO/SLOGAN to personalize.
 * ✅ Minimal, clean, and responsive. Rounded 2xl, soft shadows, generous spacing.
 * ✅ Includes: Hero, Features, Best‑sellers grid, About, Values, Newsletter, Contact, Footer.
 * ✅ Theme toggle (Light/Dark) and Accent selector.
 */

const BRAND_NAME = "ÉLA"; // ✨ שנה לשם המותג שלך (למשל: "Soléa" / "AYO")
const SLOGAN = "ספורט. צניעות. אלגנטיות."; // סיסמה קצרה

export default function ModestActivewearLanding() {
  const [dark, setDark] = useState(false);
  const [accent, setAccent] = useState("rose"); // rose | emerald | sky | violet | amber

  const accentClasses = useMemo(() => {
    const map: Record<string, { solid: string; soft: string; ring: string; text: string }> = {
      rose: { solid: "bg-rose-600", soft: "bg-rose-50", ring: "ring-rose-200", text: "text-rose-600" },
      emerald: { solid: "bg-emerald-600", soft: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-600" },
      sky: { solid: "bg-sky-600", soft: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-600" },
      violet: { solid: "bg-violet-600", soft: "bg-violet-50", ring: "ring-violet-200", text: "text-violet-600" },
      amber: { solid: "bg-amber-500", soft: "bg-amber-50", ring: "ring-amber-200", text: "text-amber-600" },
    };
    return map[accent];
  }, [accent]);

  return (
    <div dir="rtl" className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`h-9 w-9 grid place-items-center rounded-2xl ${accentClasses.solid} text-white shadow-sm`}> 
                <Star className="h-4 w-4" />
              </div>
              <span className="font-semibold tracking-tight text-lg">{BRAND_NAME}</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="hover:opacity-80">יתרונות</a>
              <a href="#products" className="hover:opacity-80">נמכרים ביותר</a>
              <a href="#about" className="hover:opacity-80">על המותג</a>
              <a href="#values" className="hover:opacity-80">ערכים</a>
              <a href="#contact" className="hover:opacity-80">צור קשר</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setDark(v => !v)} className="rounded-2xl">
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Accent Selector */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">צבע דגש:</span>
            {(["rose","emerald","sky","violet","amber"] as const).map(c => (
              <button
                key={c}
                onClick={() => setAccent(c)}
                aria-label={`accent-${c}`}
                className={`h-7 w-7 rounded-full border border-slate-200 dark:border-slate-800 ring-2 ${accent === c ? accentClasses.ring : "ring-transparent"} transition-all`}
                style={{ backgroundColor: getTailwindColor(c) }}
              />
            ))}
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className={`absolute inset-0 ${accentClasses.soft}`} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                  {BRAND_NAME} — {SLOGAN}
                </h1>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-prose">
                  בגדי ספורט יוקרתיים וצנועים לנשים: טייץ, חצאיות‑ספורט ושכבות נושמות לאימון יוגה ופילאטיס — עם גזרות נקיות וחומרים איכותיים המותאמים לתנועה חופשית.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button className={`rounded-2xl px-6 ${accentClasses.solid}`}>לרכישה עכשיו</Button>
                  <Button variant="outline" className="rounded-2xl px-6">צפה בקולקציה</Button>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /><span>כיסוי מלא ושקיפות צנועה</span></div>
                  <div className="flex items-center gap-2"><Leaf className="h-4 w-4" /><span>בדים נושמים וידידותיים</span></div>
                  <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /><span>אסתטיקה נקייה</span></div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="relative">
                  <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-tr from-slate-200/80 to-white dark:from-slate-800/60 dark:to-slate-900 shadow-xl" />
                  <div className={`absolute -bottom-3 -left-3 rounded-2xl ${accentClasses.solid} text-white px-3 py-2 shadow-lg flex items-center gap-2`}>
                    <Package className="h-4 w-4"/>
                    <span className="text-sm">משלוח חינם מעל 299₪</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="h-5 w-5" />, title: "צניעות מעוצבת", desc: "כיסוי מחמיא ותומך תנועה — שכבות החלקה וחצאיות‑ספורט מעל טייץ." },
              { icon: <Leaf className="h-5 w-5" />, title: "בדים נושמים", desc: "Dry‑Touch עם נידוף זיעה מהיר והרגשה רכה על העור." },
              { icon: <Sparkles className="h-5 w-5" />, title: "גימור יוקרתי", desc: "חוטים איכותיים, תפרים שטוחים ואלמנטים מינימליסטיים." },
            ].map((f, i) => (
              <Card key={i} className="rounded-2xl border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className={`grid place-items-center h-8 w-8 rounded-xl ${accentClasses.soft}`}>{f.icon}</span>
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 dark:text-slate-300 text-sm">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">נמכרים ביותר</h2>
            <a className={`text-sm ${accentClasses.text} hover:underline`} href="#">לצפייה בכל הפריטים</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "טייץ כיסוי + חצאית", price: "₪219", tag: "Dry‑Touch" },
              { name: "חצאית‑ספורט מידי", price: "₪199", tag: "Stretch" },
              { name: "חולצת שכבה ארוכה", price: "₪169", tag: "Feather‑Soft" },
              { name: "קרדיגן אימון קל", price: "₪189", tag: "Air‑Knit" },
              { name: "טופ תומך צנוע", price: "₪159", tag: "Hold" },
              { name: "סט יוגה מלא", price: "₪529", tag: "Bundle" },
            ].map((p, i) => (
              <Card key={i} className="rounded-2xl overflow-hidden border-slate-200 dark:border-slate-800">
                <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800" />
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{p.tag}</div>
                  </div>
                  <div className="font-semibold">{p.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">על {BRAND_NAME}</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-prose">
                {BRAND_NAME} נולד מתוך צורך אמיתי: בגדי ספורט צנועים שלא מוותרים על איכות, נוחות ואסתטיקה. כל פריט מתוכנן בתשומת לב לגוף בתנועה —
                כדי שתרגישי חופשיה, מכוסה, ומדויקת לעצמך, בכל אימון.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { k: "+1500", v: "לקוחות מרוצות" },
                  { k: "4.9★", v: "דירוג ממוצע" },
                  { k: "48h", v: "משלוח מהיר" },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 text-center">
                    <div className={`text-lg font-semibold ${accentClasses.text}`}>{s.k}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-slate-100 dark:bg-slate-800" />
          </div>
        </section>

        {/* Values */}
        <section id="values" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">ערכי המותג</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "איזון (Yin‑Yang)", text: "פרופורציות נקיות ושכבות חכמות למראה הרמוני באימון." },
              { title: "אחריות", text: "ייצור הוגן ובדים שנבחרו בקפידה – איכות שמחזיקה זמן." },
              { title: "פשטות", text: "קווים מינימליסטיים, צבעוניות רגועה, תחושה יוקרתית ונקייה." },
            ].map((v, i) => (
              <Card key={i} className="rounded-2xl border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-base">{v.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 dark:text-slate-300 text-sm">{v.text}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className={`rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 bg-white/70 dark:bg-slate-900/60 shadow-sm`}>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold">הצטרפי לרשימת ההשקה</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">עדכונים, מבצעים וכניסה מוקדמת לקולקציה החדשה.</p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="האימייל שלך" className="rounded-2xl" required />
                <Button type="submit" className={`rounded-2xl px-6 ${accentClasses.solid}`}>אני בפנים</Button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="rounded-2xl border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-base">צור קשר</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-3">
                  <div className="grid gap-1">
                    <label className="text-sm">שם מלא</label>
                    <Input placeholder="הקלד/י שם" className="rounded-2xl" />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm">אימייל</label>
                    <Input type="email" placeholder="name@email.com" className="rounded-2xl" />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm">הודעה</label>
                    <Textarea placeholder="איך אפשר לעזור?" className="rounded-2xl min-h-[120px]" />
                  </div>
                  <div className="flex justify-end">
                    <Button className={`rounded-2xl px-6 ${accentClasses.solid}`}>שליחה</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="font-semibold">פרטים מהירים</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>דוא\"ל: hello@brand.co</li>
                <li>אינסטגרם: @brand.active</li>
                <li>שעות מענה: א׳–ה׳ 9:00–17:00</li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">הערות התאמה מהירה</h4>
                <ul className="text-xs list-disc pr-4 space-y-1 text-slate-500">
                  <li>שנה את <code>BRAND_NAME</code> ו‑<code>SLOGAN</code> בראש הקובץ.</li>
                  <li>החלף תמונות (הבלוקים האפורים) בתמונות המוצרים שלך.</li>
                  <li>בחר צבע דגש בשורת הבחירה או החלף <code>accent</code> בקוד.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className={`h-8 w-8 grid place-items-center rounded-2xl ${accentClasses.solid} text-white`}>
                <Star className="h-4 w-4" />
              </div>
              <span className="text-sm">© {new Date().getFullYear()} {BRAND_NAME}. כל הזכויות שמורות.</span>
            </div>
            <div className="text-xs text-slate-500">תנאים | פרטיות | החזרות</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Helper: approximate Tailwind palette for tiny color swatches
function getTailwindColor(name: string) {
  const map: Record<string, string> = {
    rose: "#fda4af",
    emerald: "#6ee7b7",
    sky: "#7dd3fc",
    violet: "#c4b5fd",
    amber: "#fcd34d",
  };
  return map[name] ?? "#e2e8f0";
}
