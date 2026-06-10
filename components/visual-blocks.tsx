type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
};

export function ImagePlaceholder({
  src,
  alt: _alt,
  label,
  className = "aspect-[16/9]"
}: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden bg-mist-200 ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(17,19,21,0.08)), url("${src}")`
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(17,19,21,0.34))]" />
      <div className="absolute inset-0 border border-white/40" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 border-t border-white/55 pt-4 backdrop-blur-[1px]">
        <span className="text-sm font-medium text-white drop-shadow">{label ?? "Image placeholder"}</span>
        <span className="max-w-[58%] truncate text-right text-xs leading-5 text-white/75">{src}</span>
      </div>
    </div>
  );
}

export function LargeVisualStrip({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1.7fr_1fr]">
      <ImagePlaceholder src={src} alt={alt} label="Hero visual" className="aspect-[16/9]" />
      <div className="grid gap-4">
        <ImagePlaceholder src={src.replace("hero", "detail-01")} alt={alt} label="Detail crop" />
        <ImagePlaceholder src={src.replace("hero", "process-01")} alt={alt} label="Process frame" />
      </div>
    </div>
  );
}
