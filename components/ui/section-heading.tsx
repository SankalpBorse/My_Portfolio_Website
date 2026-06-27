import { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="system-label mb-4">{label}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#D3D9D4] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#D3D9D4]/72">
          {description}
        </p>
      ) : null}
    </div>
  );
}
