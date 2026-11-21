import { $DataInput, $DataOutput, $InputStream, $DataInputStream, $DataOutputStream, $OutputStream, $Closeable } from "@package/java/io";
import { $Function_ } from "@package/java/util/function";
import { $NBTTag, $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $Image } from "@package/com/tom/cpl/util";
import { $Vec3f, $Vec2i } from "@package/com/tom/cpl/math";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/tom/cpm/shared/io" {
    export class $IOHelper$ObjectReader<T, R> {
    }
    export interface $IOHelper$ObjectReader<T, R> {
        read(arg0: T, arg1: $IOHelper): R;
    }
    /**
     * Values that may be interpreted as {@link $IOHelper$ObjectReader}.
     */
    export type $IOHelper$ObjectReader_<T, R> = ((arg0: T, arg1: $IOHelper) => R);
    export class $IOHelper implements $DataInput, $DataOutput, $Closeable {
        size(): number;
        reset(): void;
        toBytes(): number[];
        write(arg0: number[]): void;
        write(arg0: number[], arg1: number, arg2: number): void;
        write(arg0: number): void;
        read(): number;
        /**
         * @deprecated
         */
        readLine(): string;
        close(): void;
        writeInt(arg0: number): void;
        readInt(): number;
        static copy(arg0: $InputStream, arg1: $OutputStream): void;
        writeUTF(arg0: string): void;
        readUTF(): string;
        available(): number;
        flip(): $IOHelper;
        writeBytes(arg0: string): void;
        readFully(arg0: number[], arg1: number, arg2: number): void;
        readFully(arg0: number[]): void;
        writeFloat(arg0: number): void;
        readFloat(): number;
        writeChar(arg0: number): void;
        readChar(): string;
        readUnsignedByte(): number;
        readUnsignedShort(): number;
        writeShort(arg0: number): void;
        skipBytes(arg0: number): number;
        readBoolean(): boolean;
        readByte(): number;
        readShort(): number;
        readLong(): number;
        readDouble(): number;
        writeBoolean(arg0: boolean): void;
        writeByte(arg0: number): void;
        writeLong(arg0: number): void;
        writeDouble(arg0: number): void;
        writeChars(arg0: string): void;
        writeVarInt(arg0: number): void;
        readVarVec3(): $Vec3f;
        readUUID(): $UUID;
        writeUUID(arg0: $UUID_): void;
        readVarInt(): number;
        readEnum<T extends $Enum<T>>(arg0: T[]): T;
        writeEnum<T extends $Enum<T>>(arg0: T): void;
        readByteArray(): number[];
        writeByteArray(arg0: number[]): void;
        writeJUTF(arg0: string): void;
        readJUTF(): string;
        writeImage(arg0: $Image): void;
        getDout(): $DataOutputStream;
        readNBT(): $NBTTagCompound;
        writeNBT(arg0: $NBTTag): void;
        readImage(): $IOHelper$ImageBlock;
        writeBoolArray(arg0: number, arg1: boolean[]): void;
        readBoolArray(arg0: number): boolean[];
        readObjectBlock<T extends $Enum<T>, B>(arg0: T[], arg1: $IOHelper$ObjectReader_<T, B>): B;
        writeBlock(arg0: $IOHelper): void;
        writeSignedVarInt(arg0: number): void;
        readSignedVarInt(): number;
        readNextBlock(): $IOHelper;
        writeNextBlock(): $IOHelper;
        writeVec3ub(arg0: $Vec3f): void;
        writeVarFloat(arg0: number): void;
        readVarFloat(): number;
        writeFloat2(arg0: number): void;
        writeAngle(arg0: $Vec3f): void;
        read2v(): $Vec2i;
        read2s(): $Vec2i;
        readVec3ub(): $Vec3f;
        write2s(arg0: $Vec2i): void;
        write2v(arg0: $Vec2i): void;
        writeVec3b(arg0: $Vec3f): void;
        toB64(): string;
        readFloat2(): number;
        readAngle(): $Vec3f;
        readVec3b(): $Vec3f;
        writeVec6b(arg0: $Vec3f): void;
        getDin(): $DataInputStream;
        readVec6b(): $Vec3f;
        writeNextObjectBlock<T extends $Enum<T>>(arg0: T): $IOHelper;
        writeVarVec3(arg0: $Vec3f): void;
        writeObjectBlock<T extends $Enum<T>, B extends $IOHelper$ObjectBlock<T>>(arg0: B): void;
        writeObjectBlock<T extends $Enum<T>, B>(arg0: B, arg1: $Function_<B, T>, arg2: $IOHelper$ObjectWriter_<B>): void;
        constructor(arg0: $OutputStream);
        constructor(arg0: number[]);
        constructor();
        constructor(arg0: string);
        constructor(arg0: $DataInputStream);
        constructor(arg0: $DataOutputStream);
        constructor(arg0: $InputStream);
        get dout(): $DataOutputStream;
        get din(): $DataInputStream;
    }
    export class $IOHelper$ObjectBlock<T extends $Enum<T>> {
    }
    export interface $IOHelper$ObjectBlock<T extends $Enum<T>> {
        write(arg0: $IOHelper): void;
        getType(): T;
        get type(): T;
    }
    export class $IOHelper$ImageBlock {
        getWidth(): number;
        getHeight(): number;
        getImage(): $Image;
        doReadImage(): void;
        constructor(arg0: $IOHelper);
        get width(): number;
        get height(): number;
        get image(): $Image;
    }
    export class $IOHelper$ObjectWriter<B> {
    }
    export interface $IOHelper$ObjectWriter<B> {
        write(arg0: B, arg1: $IOHelper): void;
    }
    /**
     * Values that may be interpreted as {@link $IOHelper$ObjectWriter}.
     */
    export type $IOHelper$ObjectWriter_<B> = ((arg0: B, arg1: $IOHelper) => void);
}
