import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTopicBySlug } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { InstructionView } from "@/components/guest/instruction-view";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug, "outdoor");
  return { title: topic?.title ?? "Not found" };
}

export default async function OutdoorTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug, "outdoor");
  if (!topic) notFound();

  return (
    <>
      <GuestPageHeader title={topic.title} backHref="/outdoor" />
      <InstructionView topic={topic} />
    </>
  );
}
