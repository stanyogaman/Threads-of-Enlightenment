import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
const prisma = new PrismaClient();
async function main() {
  if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
    await prisma.user.upsert({ where: { email: process.env.ADMIN_EMAIL }, update: {}, create: { email: process.env.ADMIN_EMAIL, passwordHash: await hash(process.env.ADMIN_PASSWORD, 12), role: "ADMIN" } });
  }
  await prisma.siteSetting.upsert({ where: { id: "site" }, update: {}, create: { id: "site", siteName: "Threads of Enlightenment", siteDescription: "Conversations that elevate humanity, deepen faith, and awaken purpose." } });
  await prisma.product.upsert({ where: { slug: "standard-interview-package" }, update: {}, create: { title: "Standard Interview Package", slug: "standard-interview-package", price: "49.99", shortDescription: "30–45 minute interview, YouTube video, and 2 Shorts.", longDescriptionHtml: "<ul><li>30–45 minute interview</li><li>YouTube video</li><li>2 Shorts</li></ul>", productType: "interview", published: true } });
  await prisma.product.upsert({ where: { slug: "featured-interview-promotion" }, update: {}, create: { title: "Featured Interview & Promotion", slug: "featured-interview-promotion", price: "0.00", shortDescription: "Edited video, YouTube publishing, 5 Shorts, website promotion, and distribution to 14+ podcast platforms.", longDescriptionHtml: "<ul><li>30–45 minute interview</li><li>Edited video</li><li>YouTube publishing</li><li>5 Shorts</li><li>Website promotion</li><li>Distribution to 14+ podcast platforms</li></ul>", productType: "interview", published: true } });
}
main().finally(async () => prisma.$disconnect());
