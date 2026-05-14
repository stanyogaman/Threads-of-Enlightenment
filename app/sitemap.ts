import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { siteUrl } from "@/lib/seo";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const staticPaths=["","/about","/podcast","/interview","/apply","/blog","/shop","/contact","/testimonials"]; const [posts,products]=await Promise.all([db.blogPost.findMany({where:{published:true},select:{slug:true,updatedAt:true}}).catch(()=>[]),db.product.findMany({where:{published:true},select:{slug:true,updatedAt:true}}).catch(()=>[])]); return [...staticPaths.map(p=>({url:`${siteUrl}${p}`,lastModified:new Date()})),...posts.map(p=>({url:`${siteUrl}/blog/${p.slug}`,lastModified:p.updatedAt})),...products.map(p=>({url:`${siteUrl}/shop/${p.slug}`,lastModified:p.updatedAt}))]; }
