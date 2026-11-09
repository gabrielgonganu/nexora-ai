import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NexoraSite from "@/components/NexoraSite";
import { content,findPage,pageSlugs,pages,toUrl,type Locale,type PageKey } from "@/lib/content";
type PageProps={params:Promise<{locale:string;slug?:string[]}>};
export function generateStaticParams(){return (["en","pt"] as Locale[]).flatMap(locale=>pages.map(page=>({locale,slug:pageSlugs[page][locale]?[pageSlugs[page][locale]]:[]})))}
export async function generateMetadata({params}:PageProps):Promise<Metadata>{const {locale,slug=[]}=await params;if(locale!=="en"&&locale!=="pt")return {};const key=findPage(locale,slug.join("/"));if(!key)return {};const d=content[locale];const title=key==="home"?"Intelligence in Motion":key==="solutions"?d.nav.solutions:key==="about"?d.nav.about:key==="contact"?d.nav.contact:key==="flow"?"Flow AI":key==="insights"?"Insights":key==="assistant"?"Assistant":"Translate";return {title,description:key==="home"?d.home.description:key==="solutions"?d.solutions.desc:key==="about"?d.about.desc:key==="contact"?d.contact.desc:key==="flow"?d.flow.desc:key==="insights"?d.insights.desc:key==="assistant"?d.assistant.desc:d.translate.desc,alternates:{languages:{en:toUrl("en",key),"pt-BR":toUrl("pt",key)}}}};
export default async function Page({params}:PageProps){const {locale,slug=[]}=await params;if(locale!=="en"&&locale!=="pt")notFound();const page=findPage(locale as Locale,slug.join("/"));if(!page)notFound();return <NexoraSite locale={locale as Locale} page={page as PageKey}/>}
