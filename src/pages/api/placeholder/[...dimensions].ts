import type { NextApiRequest, NextApiResponse } from "next";
import { createCanvas } from 'canvas';

interface PlaceholderConfig {
  width: number;
  height: number;
  bg?: string;
  color?: string;
  text?: string;
  format?: 'png' | 'svg';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dimensions = req.query.dimensions as string[];
    const format = (req.query.format as 'png' | 'svg') || 'png';
    
    const config: PlaceholderConfig = {
      width: parseInt(dimensions[0]) || 300,
      height: dimensions[1] ? parseInt(dimensions[1]) : parseInt(dimensions[0]) || 150,
      bg: (req.query.bg as string) || '#e2e8f0',
      color: (req.query.color as string) || '#64748b',
      text: (req.query.text as string) || `${dimensions[0]}×${dimensions[1]}`,
      format
    };

    if (isNaN(config.width) || isNaN(config.height)) {
      return res.status(400).json({ error: 'Invalid dimensions' });
    }

    if (format === 'svg') {
      const svg = generatePlaceholderSVG(config);
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.status(200).send(svg);
    } else {
      const png = await generatePlaceholderPNG(config);
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.status(200).send(png);
    }

  } catch (error) {
    res.status(500).json({ error: 'Failed to generate placeholder' });
  }
}

function generatePlaceholderSVG(config: PlaceholderConfig): string {
  const { width, height, bg, color, text } = config;
  
  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bg}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="system-ui, sans-serif"
        font-size="${Math.min(width, height) * 0.1}px"
        fill="${color}"
        text-anchor="middle"
        dy=".3em"
      >
        ${text}
      </text>
    </svg>
  `.trim();
}

async function generatePlaceholderPNG(config: PlaceholderConfig): Promise<Buffer> {
  const { width, height, bg, color, text } = config;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Draw background
  ctx.fillStyle = bg || '#e2e8f0';
  ctx.fillRect(0, 0, width, height);
  
  // Draw text
  ctx.fillStyle = color || '#64748b';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${Math.min(width, height) * 0.1}px system-ui, sans-serif`;
  ctx.fillText(text || '', width / 2, height / 2);
  
  return canvas.toBuffer('image/png');
}