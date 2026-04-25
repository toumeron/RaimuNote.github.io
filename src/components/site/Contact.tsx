import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TYPES = ["サービスについて", "取材・メディア", "採用について", "その他"];

export const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState(TYPES[0]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.currentTarget as HTMLFormElement).reset();
      setType(TYPES[0]);
      toast({
        title: "送信を受け付けました 🍋",
        description: "内容を確認のうえ、3営業日以内にご返信いたします。",
      });
    }, 700);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="sticker -rotate-2 mb-4">Contact</span>
            <h2 className="reveal font-jp-black text-5xl leading-tight md:text-7xl">
              はじめましては、
              <br />
              ここから。
            </h2>
            <p className="reveal mt-6 text-muted-foreground md:text-lg">
              サービスへのご質問、取材のご依頼、お仕事のご相談など、
              どんなことでもお気軽にお声がけください。
            </p>
            <div className="reveal mt-8 space-y-3 text-sm">
              <div>
                <span className="font-bold">Mail:</span>{" "}
                <a className="underline-offset-4 hover:underline" href="mailto:hello@limenote.example">
                  hello@limenote.example
                </a>
              </div>
              <div>
                <span className="font-bold">Tel:</span> 03-0000-0000(平日 10:00–18:00)
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal md:col-span-7 rounded-3xl bg-card p-6 shadow-sticker md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">お名前</Label>
                <Input id="name" name="name" required placeholder="山田 太郎" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label>お問い合わせ種別</Label>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    aria-pressed={type === t}
                    className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                      type === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="message">お問い合わせ内容</Label>
              <Textarea id="message" name="message" required rows={6} placeholder="ご質問・ご要望をお書きください。" />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 font-bold text-background shadow-soft transition-transform hover:scale-[1.02] disabled:opacity-60 md:w-auto md:px-10"
            >
              {submitting ? "送信中..." : "送信する 🍋"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
