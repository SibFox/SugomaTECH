import { $InputStream } from "@package/java/io";
import { $ByteBuffer } from "@package/java/nio";
import { $BufferedImage } from "@package/java/awt/image";

declare module "@package/dev/ftb/mods/ftblibrary/math" {
    export class $PixelBuffer {
        fill(col: number): void;
        fill(startX: number, startY: number, w: number, h: number, col: number): void;
        static from(stream: $InputStream): $PixelBuffer;
        static from(img: $BufferedImage): $PixelBuffer;
        copy(): $PixelBuffer;
        getWidth(): number;
        getHeight(): number;
        getRGB(startX: number, startY: number, w: number, h: number, p: number[]): number[];
        getRGB(x: number, y: number): number;
        getPixels(): number[];
        setPixels(p: number[]): void;
        setRGB(startX: number, startY: number, w: number, h: number, rgbArray: number[]): void;
        setRGB(startX: number, startY: number, buffer: $PixelBuffer): void;
        setRGB(x: number, y: number, col: number): void;
        getSubimage(x: number, y: number, w: number, h: number): $PixelBuffer;
        toByteBuffer(alpha: boolean): $ByteBuffer;
        toImage(type: number): $BufferedImage;
        constructor(w: number, h: number);
        get width(): number;
        get height(): number;
    }
}
