import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Item_, $DyeColor_, $Item, $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $Predicate, $Supplier_, $Function_, $Consumer_, $BiFunction, $Predicate_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Cloneable, $Class, $Runnable_, $Comparable } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
export * as mixininterfaces from "@package/com/petrolpark/util/mixininterfaces";

declare module "@package/com/petrolpark/util" {
    export class $Conversion$BlockStateConversion {
    }
    export interface $Conversion$BlockStateConversion extends $Conversion<$BlockStateAndEntity> {
        swap(arg0: $BlockStateAndEntity_, arg1: $Block_): $Conversion$ConversionResult<$BlockStateAndEntity>;
        swap(arg0: $BlockStateAndEntity_, arg1: $Block_, arg2: boolean): $Conversion$ConversionResult<$BlockStateAndEntity>;
    }
    /**
     * Values that may be interpreted as {@link $Conversion$BlockStateConversion}.
     */
    export type $Conversion$BlockStateConversion_ = (() => void);
    export class $Conversion$BlockStateBlockConversion implements $Conversion$BlockStateConversion {
        convert(arg0: $Level_, arg1: $BlockStateAndEntity_, arg2: $Player | null): $Conversion$ConversionResult<$BlockStateAndEntity>;
        swap(arg0: $BlockStateAndEntity_, arg1: $Block_): $Conversion$ConversionResult<$BlockStateAndEntity>;
        swap(arg0: $BlockStateAndEntity_, arg1: $Block_, arg2: boolean): $Conversion$ConversionResult<$BlockStateAndEntity>;
        finish(arg0: $BlockStateAndEntity_): $Conversion$ConversionResult$Finish<$BlockStateAndEntity>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $BlockStateAndEntity_): $Conversion$ConversionResult$Pass<$BlockStateAndEntity>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $BlockStateAndEntity_): $Supplier<$Conversion$ConversionResult<$BlockStateAndEntity>>;
        blockConversion: $Conversion<$Block>;
        constructor(arg0: $Conversion_<$Block>);
    }
    export class $Pair<F, S> {
        static of<F, S>(arg0: F, arg1: S): $Pair<F, S>;
        copy(): $Pair<F, S>;
        getFirst(): F;
        swap(): $Pair<S, F>;
        getSecond(): S;
        setSecond(arg0: S): void;
        setFirst(arg0: F): void;
    }
    export class $Conversion$ContainerConversion extends $Record implements $Conversion$BlockStateConversion {
        convert(arg0: $Level_, arg1: $BlockStateAndEntity_, arg2: $Player | null): $Conversion$ConversionResult<$BlockStateAndEntity>;
        itemConversion(): $Conversion<$ItemStack>;
        swap(arg0: $BlockStateAndEntity_, arg1: $Block_): $Conversion$ConversionResult<$BlockStateAndEntity>;
        swap(arg0: $BlockStateAndEntity_, arg1: $Block_, arg2: boolean): $Conversion$ConversionResult<$BlockStateAndEntity>;
        finish(arg0: $BlockStateAndEntity_): $Conversion$ConversionResult$Finish<$BlockStateAndEntity>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $BlockStateAndEntity_): $Conversion$ConversionResult$Pass<$BlockStateAndEntity>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $BlockStateAndEntity_): $Supplier<$Conversion$ConversionResult<$BlockStateAndEntity>>;
        constructor(itemConversion: $Conversion_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$ContainerConversion}.
     */
    export type $Conversion$ContainerConversion_ = { itemConversion?: $Conversion_<$ItemStack>,  } | [itemConversion?: $Conversion_<$ItemStack>, ];
    export class $GoldHelper$RegisterGoldBlockConversionEvent extends $Conversion$RegisterConversionEvent<$Block> {
    }
    export class $BlockStateAndEntity extends $Record {
        static of(arg0: $BlockState_): $BlockStateAndEntity;
        state(): $BlockState;
        static at(arg0: $BlockGetter, arg1: $BlockPos_): $BlockStateAndEntity;
        is(arg0: $TagKey_<$Block>): boolean;
        block(): $Block;
        entity(): $BlockEntity;
        withState(arg0: $BlockState_): $BlockStateAndEntity;
        hasEntity(): boolean;
        withStateOptional(arg0: $BlockState_): ($BlockStateAndEntity) | undefined;
        entityOp(): ($BlockEntity) | undefined;
        constructor(state: $BlockState_, entity: $BlockEntity | null);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateAndEntity}.
     */
    export type $BlockStateAndEntity_ = { state?: $BlockState_, entity?: $BlockEntity,  } | [state?: $BlockState_, entity?: $BlockEntity, ];
    export class $Conversion$Entry<T> extends $Record implements $Comparable<$Conversion$Entry<T>> {
        priority(): number;
        compareTo(arg0: $Conversion$Entry_<$Conversion$Entry_<T>>): number;
        id(): $ResourceLocation;
        conversion(): $Conversion<$Conversion$Entry<T>>;
        constructor(id: $ResourceLocation_, conversion: $Conversion_<$Conversion$Entry<T>>, priority: number);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$Entry}.
     */
    export type $Conversion$Entry_<T> = { priority?: number, id?: $ResourceLocation_, conversion?: $Conversion_<any>,  } | [priority?: number, id?: $ResourceLocation_, conversion?: $Conversion_<any>, ];
    export class $GoldHelper$RegisterGoldBlockStateConversionEvent extends $Conversion$RegisterConversionEvent<$BlockStateAndEntity> {
    }
    export class $Conversion$ConversionResult$Pass<T> extends $Record implements $Conversion$ConversionResult<T> {
        value(): T;
        pass(): boolean;
        finish(): boolean;
        constructor(value: T);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$ConversionResult$Pass}.
     */
    export type $Conversion$ConversionResult$Pass_<T> = { value?: any,  } | [value?: any, ];
    export class $Conversion$RegisterConversionEvent<T> extends $Event {
        register(arg0: $ResourceLocation_, arg1: $Conversion_<T>, arg2: number): void;
    }
    export class $GoldHelper$RegisterGoldItemStackConversionEvent extends $Conversion$RegisterConversionEvent<$ItemStack> {
    }
    export class $Conversion$TaggedItemConversion extends $Record implements $Conversion<$Item> {
        convert(arg0: $Level_, arg1: $Item_, arg2: $Player | null): $Conversion$ConversionResult<$Item>;
        result(): $Supplier<$Item>;
        tag(): $TagKey<$Item>;
        classesMustMatch(): boolean;
        finish(arg0: $Item_): $Conversion$ConversionResult$Finish<$Item>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $Item_): $Conversion$ConversionResult$Pass<$Item>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $Item_): $Supplier<$Conversion$ConversionResult<$Item>>;
        constructor(tag: $TagKey_<$Item>, result: $Supplier_<$Item>, classesMustMatch: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$TaggedItemConversion}.
     */
    export type $Conversion$TaggedItemConversion_ = { result?: $Supplier_<$Item>, tag?: $TagKey_<$Item>, classesMustMatch?: boolean,  } | [result?: $Supplier_<$Item>, tag?: $TagKey_<$Item>, classesMustMatch?: boolean, ];
    export class $Conversion$ItemStackItemConversion implements $Conversion$ItemStackConversion {
        convert(arg0: $Level_, arg1: $ItemStack_, arg2: $Player | null): $Conversion$ConversionResult<$ItemStack>;
        swap(arg0: $ItemStack_, arg1: $Item_): $Conversion$ConversionResult<$ItemStack>;
        swap(arg0: $ItemStack_, arg1: $Item_, arg2: boolean): $Conversion$ConversionResult<$ItemStack>;
        finish(arg0: $ItemStack_): $Conversion$ConversionResult$Finish<$ItemStack>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $ItemStack_): $Conversion$ConversionResult$Pass<$ItemStack>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $ItemStack_): $Supplier<$Conversion$ConversionResult<$ItemStack>>;
        itemConversion: $Conversion<$Item>;
        constructor(arg0: $Conversion_<$Item>);
    }
    export class $ColorHelper$GetEntityColorEvent extends $LivingEvent {
        setColor(arg0: $DyeColor_ | null): void;
        getColor(): $DyeColor;
        constructor(arg0: $LivingEntity);
    }
    export class $ColorHelper$SetEntityColorEvent extends $LivingEvent implements $ICancellableEvent {
        getColor(): $DyeColor;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $DyeColor_);
        get color(): $DyeColor;
    }
    export class $Conversion$ItemStackContainerConversion extends $Record implements $Conversion$ItemStackConversion {
        convert(arg0: $Level_, arg1: $ItemStack_, arg2: $Player | null): $Conversion$ConversionResult<$ItemStack>;
        contentsConversion(): $Conversion<$ItemStack>;
        swap(arg0: $ItemStack_, arg1: $Item_): $Conversion$ConversionResult<$ItemStack>;
        swap(arg0: $ItemStack_, arg1: $Item_, arg2: boolean): $Conversion$ConversionResult<$ItemStack>;
        finish(arg0: $ItemStack_): $Conversion$ConversionResult$Finish<$ItemStack>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $ItemStack_): $Conversion$ConversionResult$Pass<$ItemStack>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $ItemStack_): $Supplier<$Conversion$ConversionResult<$ItemStack>>;
        constructor(contentsConversion: $Conversion_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$ItemStackContainerConversion}.
     */
    export type $Conversion$ItemStackContainerConversion_ = { contentsConversion?: $Conversion_<$ItemStack>,  } | [contentsConversion?: $Conversion_<$ItemStack>, ];
    export class $Conversion$ConversionResult$Finish<T> extends $Record implements $Conversion$ConversionResult<T> {
        value(): T;
        pass(): boolean;
        finish(): boolean;
        constructor(value: T);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$ConversionResult$Finish}.
     */
    export type $Conversion$ConversionResult$Finish_<T> = { value?: any,  } | [value?: any, ];
    export class $Mask implements $Cloneable {
        get(arg0: number, arg1: number): boolean;
        clone(): $Mask;
        clear(arg0: number, arg1: number): void;
        set(arg0: number, arg1: number): void;
        combine(arg0: $Mask, arg1: $Mask$Combination_): void;
        move(arg0: number, arg1: number): void;
        or(arg0: $Mask): void;
        getRegion(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        andNot(arg0: $Mask): void;
        and(arg0: $Mask): void;
        minX(): number;
        minY(): number;
        static rect(arg0: number, arg1: number, arg2: number, arg3: number): $Mask;
        maxY(): number;
        maxX(): number;
        static fromTo(arg0: number, arg1: number, arg2: number, arg3: number): $Mask;
        cover(arg0: $Mask): void;
        cover(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static friendlyCodecSized(arg0: number, arg1: number): $Codec<$Mask>;
        rectangularize(): $List<$Rect2i>;
        static fromRowStrings(arg0: number, arg1: number, arg2: $List_<string>): $Mask;
        rowStrings(): $List<string>;
        downsample(arg0: number): $Mask;
        static FRIENDLY_CODEC: $Codec<$Mask>;
    }
    export class $GoldHelper$RegisterGoldEntityConversionEvent extends $Conversion$RegisterConversionEvent<$Entity> {
    }
    export class $Neither<L, R> {
        static left<L, R>(arg0: L): $Neither<L, R>;
        static right<L, R>(arg0: R): $Neither<L, R>;
        static either<L, R>(arg0: ($Either<L, R>) | undefined): $Neither<L, R>;
        static either<L, R>(arg0: $Either<L, R>): $Neither<L, R>;
        static fieldCodec<L, R>(arg0: $Codec<L>, arg1: $Codec<R>, arg2: string): $MapCodec<$Neither<L, R>>;
        static neither<L, R>(): $Neither<L, R>;
        static streamCodec<B extends $ByteBuf, L, R>(arg0: $StreamCodec_<B, L>, arg1: $StreamCodec_<B, R>): $StreamCodec<B, $Neither<L, R>>;
    }
    export interface $Neither<L, R> {
        isEmpty(): boolean;
        map<T>(arg0: $Function_<L, T>, arg1: $Function_<R, T>): (T) | undefined;
        isPresent(): boolean;
        left(): (L) | undefined;
        right(): (R) | undefined;
        swap(): $Neither<R, L>;
        either(): ($Either<L, R>) | undefined;
        mapBoth<C, D>(arg0: $Function_<L, C>, arg1: $Function_<R, D>): $Neither<C, D>;
        ifLeft(arg0: $Consumer_<L>): $Neither<L, R>;
        mapRight<T>(arg0: $Function_<R, T>): $Neither<L, T>;
        mapLeft<T>(arg0: $Function_<L, T>): $Neither<T, R>;
        ifRight(arg0: $Consumer_<R>): $Neither<L, R>;
        isLeft(): boolean;
        isRight(): boolean;
        flatMapLeft<L2>(arg0: $Function_<L, $Neither<L2, R>>): $Neither<L2, R>;
        ifNeither(arg0: $Runnable_): $Neither<L, R>;
        get empty(): boolean;
        get present(): boolean;
    }
    export class $Conversion$ReplacementConversion<T> extends $Record implements $Conversion<T> {
        convert(arg0: $Level_, arg1: T, arg2: $Player | null): $Conversion$ConversionResult<T>;
        result(): $Supplier<T>;
        object(): $Supplier<T>;
        finish(arg0: T): $Conversion$ConversionResult$Finish<T>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: T): $Conversion$ConversionResult$Pass<T>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: T): $Supplier<$Conversion$ConversionResult<T>>;
        constructor(object: $Supplier_<T>, result: $Supplier_<T>);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$ReplacementConversion}.
     */
    export type $Conversion$ReplacementConversion_<T> = { result?: $Supplier_<any>, object?: $Supplier_<any>,  } | [result?: $Supplier_<any>, object?: $Supplier_<any>, ];
    export class $Conversion<T> {
        static convert<T>(arg0: $Level_, arg1: T, arg2: $Player | null, arg3: $Collection_<$Conversion$Entry_<T>>): $Conversion$ConversionResult<T>;
        static convertTaggedItemStrict(arg0: $TagKey_<$Item>, arg1: $Item_): $Conversion$TaggedItemConversion;
        static convertTaggedItemStrict(arg0: $TagKey_<$Item>, arg1: $Supplier_<$Item>): $Conversion$TaggedItemConversion;
        static convertItemStackBlockState(arg0: $Conversion_<$BlockStateAndEntity>): $Conversion$BlockStateItemStackConversion;
        static convertItemStackItem(arg0: $Conversion_<$Item>): $Conversion$ItemStackItemConversion;
        static convertItemIdRegexStrict(arg0: string, arg1: string, arg2: $Supplier_<$Item>): $Conversion$ItemIDRegexConversion;
        static convertItemIdRegexStrict(arg0: string, arg1: $Supplier_<$Item>): $Conversion$ItemIDRegexConversion;
        static convertBlockIdRegexStrict(arg0: string, arg1: string, arg2: $Supplier_<$Block>): $Conversion$BlockIDRegexConversion;
        static convertBlockIdRegexStrict(arg0: string, arg1: $Supplier_<$Block>): $Conversion$BlockIDRegexConversion;
        static convertBlockIdRegexStrict(arg0: string, arg1: $Block_): $Conversion$BlockIDRegexConversion;
        static convertItemStackComponent<T>(arg0: $Predicate_<$ItemStack>, arg1: $DataComponentType_<T>, arg2: $BiFunction_<$Level, T, T>): $Conversion$ItemStackComponentConversion<T>;
        static convertItemStackComponent<T>(arg0: $Predicate_<$ItemStack>, arg1: $Supplier_<$DataComponentType<T>>, arg2: $BiFunction_<$Level, T, T>, arg3: boolean): $Conversion$ItemStackComponentConversion<T>;
        static convertTaggedBlockStrict(arg0: $TagKey_<$Block>, arg1: $Supplier_<$Block>): $Conversion$TaggedBlockConversion;
        static convertTaggedBlockStrict(arg0: $TagKey_<$Block>, arg1: $Block_): $Conversion$TaggedBlockConversion;
        static convertBlockStateBlock(arg0: $Conversion_<$Block>): $Conversion$BlockStateBlockConversion;
        static convertItemSameClass(arg0: $Supplier_<$Item>): $Conversion$AlwaysConversion<$Item>;
        static convertItemSameClass(arg0: $Item_): $Conversion$AlwaysConversion<$Item>;
        static convertContainerContents(arg0: $Conversion_<$ItemStack>): $Conversion$ContainerConversion;
        static convertBlockIdRegex(arg0: string, arg1: $Supplier_<$Block>): $Conversion$BlockIDRegexConversion;
        static convertBlockIdRegex(arg0: string, arg1: string, arg2: $Supplier_<$Block>): $Conversion$BlockIDRegexConversion;
        static convertBlockSameClass(arg0: $Supplier_<$Block>): $Conversion$AlwaysConversion<$Block>;
        static convertBlockSameClass(arg0: $Block_): $Conversion$AlwaysConversion<$Block>;
        static convertItemStackComponentIfPresent<T>(arg0: $DataComponentType_<T>, arg1: $BiFunction_<$Level, T, T>): $Conversion$ItemStackComponentConversion<T>;
        static convertItemStackComponentAndFinish<T>(arg0: $Predicate_<$ItemStack>, arg1: $DataComponentType_<T>, arg2: $BiFunction_<$Level, T, T>): $Conversion$ItemStackComponentConversion<T>;
        static convertItemStackContainerContents(arg0: $Conversion_<$ItemStack>): $Conversion$ItemStackContainerConversion;
        static convertBlock(arg0: $Block_, arg1: $Block_): $Conversion$ReplacementConversion<$Block>;
        static convertBlock(arg0: $Supplier_<$Block>, arg1: $Supplier_<$Block>): $Conversion$ReplacementConversion<$Block>;
        static convertBlockItem(arg0: $Conversion_<$Block>): $Conversion$BlockItemConversion;
        static convertTaggedBlock(arg0: $TagKey_<$Block>, arg1: $Supplier_<$Block>): $Conversion$TaggedBlockConversion;
        static convertTaggedBlock(arg0: $TagKey_<$Block>, arg1: $ResourceLocation_): $Conversion$TaggedBlockConversion;
        static convertItemIds(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Conversion$ReplacementConversion<$Item>;
        static convertItem(arg0: $Supplier_<$Item>, arg1: $Supplier_<$Item>): $Conversion$ReplacementConversion<$Item>;
        static convertItem(arg0: $Item_, arg1: $Item_): $Conversion$ReplacementConversion<$Item>;
        static convertBlockIds(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Conversion$ReplacementConversion<$Block>;
        static dontConvert<T>(arg0: $Predicate_<T>): $Conversion$NoConversion<T>;
    }
    export interface $Conversion<T> {
        finish(arg0: T): $Conversion$ConversionResult$Finish<T>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        convert(arg0: $Level_, arg1: T, arg2: $Player | null): $Conversion$ConversionResult<T>;
        pass(arg0: T): $Conversion$ConversionResult$Pass<T>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: T): $Supplier<$Conversion$ConversionResult<T>>;
    }
    /**
     * Values that may be interpreted as {@link $Conversion}.
     */
    export type $Conversion_<T> = ((arg0: $Level, arg1: T, arg2: $Player) => $Conversion$ConversionResult<T>);
    export class $Conversion$TaggedBlockConversion extends $Record implements $Conversion<$Block> {
        convert(arg0: $Level_, arg1: $Block_, arg2: $Player | null): $Conversion$ConversionResult<$Block>;
        result(): $Supplier<$Block>;
        tag(): $TagKey<$Block>;
        classesMustMatch(): boolean;
        finish(arg0: $Block_): $Conversion$ConversionResult$Finish<$Block>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $Block_): $Conversion$ConversionResult$Pass<$Block>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $Block_): $Supplier<$Conversion$ConversionResult<$Block>>;
        constructor(tag: $TagKey_<$Block>, result: $Supplier_<$Block>, classesMustMatch: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$TaggedBlockConversion}.
     */
    export type $Conversion$TaggedBlockConversion_ = { result?: $Supplier_<$Block>, tag?: $TagKey_<$Block>, classesMustMatch?: boolean,  } | [result?: $Supplier_<$Block>, tag?: $TagKey_<$Block>, classesMustMatch?: boolean, ];
    export class $Conversion$AlwaysConversion<T> extends $Record implements $Conversion<T> {
        convert(arg0: $Level_, arg1: T, arg2: $Player | null): $Conversion$ConversionResult<T>;
        result(): $Supplier<T>;
        classesMustMatch(): boolean;
        finish(arg0: T): $Conversion$ConversionResult$Finish<T>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: T): $Conversion$ConversionResult$Pass<T>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: T): $Supplier<$Conversion$ConversionResult<T>>;
        constructor(result: $Supplier_<T>, classesMustMatch: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$AlwaysConversion}.
     */
    export type $Conversion$AlwaysConversion_<T> = { result?: $Supplier_<any>, classesMustMatch?: boolean,  } | [result?: $Supplier_<any>, classesMustMatch?: boolean, ];
    export class $Conversion$ItemStackComponentConversion<T> extends $Record implements $Conversion$ItemStackConversion {
        convert(arg0: $Level_, arg1: $ItemStack_, arg2: $Player | null): $Conversion$ConversionResult<$ItemStack>;
        map(): $BiFunction<$Level, $ItemStack, $ItemStack>;
        component(): $Supplier<$DataComponentType<$ItemStack>>;
        pass(): boolean;
        predicate(): $Predicate<$ItemStack>;
        swap(arg0: $ItemStack_, arg1: $Item_): $Conversion$ConversionResult<$ItemStack>;
        swap(arg0: $ItemStack_, arg1: $Item_, arg2: boolean): $Conversion$ConversionResult<$ItemStack>;
        finish(arg0: $ItemStack_): $Conversion$ConversionResult$Finish<$ItemStack>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $ItemStack_): $Conversion$ConversionResult$Pass<$ItemStack>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $ItemStack_): $Supplier<$Conversion$ConversionResult<$ItemStack>>;
        constructor(predicate: $Predicate_<$ItemStack>, component: $Supplier_<$DataComponentType<$ItemStack>>, map: $BiFunction_<$Level, $ItemStack, $ItemStack>, pass: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$ItemStackComponentConversion}.
     */
    export type $Conversion$ItemStackComponentConversion_<T> = { pass?: boolean, map?: $BiFunction_<$Level, any, any>, component?: $Supplier_<$DataComponentType<any>>, predicate?: $Predicate_<$ItemStack>,  } | [pass?: boolean, map?: $BiFunction_<$Level, any, any>, component?: $Supplier_<$DataComponentType<any>>, predicate?: $Predicate_<$ItemStack>, ];
    export class $Lang$IndentedTooltipBuilder {
        add(arg0: $Component_): $Lang$IndentedTooltipBuilder;
        indent(): $Lang$IndentedTooltipBuilder;
        addAll(arg0: $Stream<$Component_>): $Lang$IndentedTooltipBuilder;
        unindent(): $Lang$IndentedTooltipBuilder;
        constructor(arg0: $List_<$Component_>);
    }
    export class $Mask$Combination {
    }
    export interface $Mask$Combination {
        combine(arg0: boolean, arg1: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Mask$Combination}.
     */
    export type $Mask$Combination_ = ((arg0: boolean, arg1: boolean) => boolean);
    export class $Conversion$ItemIDRegexConversion extends $Record implements $Conversion<$Item> {
        convert(arg0: $Level_, arg1: $Item_, arg2: $Player | null): $Conversion$ConversionResult<$Item>;
        result(): $Supplier<$Item>;
        namespaceRegex(): $Pattern;
        pathRegex(): $Pattern;
        classesMustMatch(): boolean;
        finish(arg0: $Item_): $Conversion$ConversionResult$Finish<$Item>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $Item_): $Conversion$ConversionResult$Pass<$Item>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $Item_): $Supplier<$Conversion$ConversionResult<$Item>>;
        constructor(namespaceRegex: $Pattern, pathRegex: $Pattern, result: $Supplier_<$Item>, classesMustMatch: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$ItemIDRegexConversion}.
     */
    export type $Conversion$ItemIDRegexConversion_ = { pathRegex?: $Pattern, namespaceRegex?: $Pattern, result?: $Supplier_<$Item>, classesMustMatch?: boolean,  } | [pathRegex?: $Pattern, namespaceRegex?: $Pattern, result?: $Supplier_<$Item>, classesMustMatch?: boolean, ];
    export class $Conversion$BlockIDRegexConversion extends $Record implements $Conversion<$Block> {
        convert(arg0: $Level_, arg1: $Block_, arg2: $Player | null): $Conversion$ConversionResult<$Block>;
        result(): $Supplier<$Block>;
        namespaceRegex(): $Pattern;
        pathRegex(): $Pattern;
        classesMustMatch(): boolean;
        finish(arg0: $Block_): $Conversion$ConversionResult$Finish<$Block>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $Block_): $Conversion$ConversionResult$Pass<$Block>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $Block_): $Supplier<$Conversion$ConversionResult<$Block>>;
        constructor(namespaceRegex: $Pattern, pathRegex: $Pattern, result: $Supplier_<$Block>, classesMustMatch: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$BlockIDRegexConversion}.
     */
    export type $Conversion$BlockIDRegexConversion_ = { pathRegex?: $Pattern, namespaceRegex?: $Pattern, result?: $Supplier_<$Block>, classesMustMatch?: boolean,  } | [pathRegex?: $Pattern, namespaceRegex?: $Pattern, result?: $Supplier_<$Block>, classesMustMatch?: boolean, ];
    export class $Conversion$BlockStateItemStackConversion extends $Record implements $Conversion$ItemStackConversion {
        convert(arg0: $Level_, arg1: $ItemStack_, arg2: $Player | null): $Conversion$ConversionResult<$ItemStack>;
        blockConversion(): $Conversion<$BlockStateAndEntity>;
        swap(arg0: $ItemStack_, arg1: $Item_): $Conversion$ConversionResult<$ItemStack>;
        swap(arg0: $ItemStack_, arg1: $Item_, arg2: boolean): $Conversion$ConversionResult<$ItemStack>;
        finish(arg0: $ItemStack_): $Conversion$ConversionResult$Finish<$ItemStack>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $ItemStack_): $Conversion$ConversionResult$Pass<$ItemStack>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $ItemStack_): $Supplier<$Conversion$ConversionResult<$ItemStack>>;
        constructor(blockConversion: $Conversion_<$BlockStateAndEntity>);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$BlockStateItemStackConversion}.
     */
    export type $Conversion$BlockStateItemStackConversion_ = { blockConversion?: $Conversion_<$BlockStateAndEntity>,  } | [blockConversion?: $Conversion_<$BlockStateAndEntity>, ];
    export class $Conversion$ItemStackConversion {
    }
    export interface $Conversion$ItemStackConversion extends $Conversion<$ItemStack> {
        swap(arg0: $ItemStack_, arg1: $Item_): $Conversion$ConversionResult<$ItemStack>;
        swap(arg0: $ItemStack_, arg1: $Item_, arg2: boolean): $Conversion$ConversionResult<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Conversion$ItemStackConversion}.
     */
    export type $Conversion$ItemStackConversion_ = (() => void);
    export class $Conversion$ConversionResult<T> {
    }
    export interface $Conversion$ConversionResult<T> {
        finish(): boolean;
        value(): T;
        pass(): boolean;
    }
    export class $Conversion$BlockItemConversion extends $Record implements $Conversion<$Item> {
        convert(arg0: $Level_, arg1: $Item_, arg2: $Player | null): $Conversion$ConversionResult<$Item>;
        blockConversion(): $Conversion<$Block>;
        finish(arg0: $Item_): $Conversion$ConversionResult$Finish<$Item>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: $Item_): $Conversion$ConversionResult$Pass<$Item>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: $Item_): $Supplier<$Conversion$ConversionResult<$Item>>;
        constructor(blockConversion: $Conversion_<$Block>);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$BlockItemConversion}.
     */
    export type $Conversion$BlockItemConversion_ = { blockConversion?: $Conversion_<$Block>,  } | [blockConversion?: $Conversion_<$Block>, ];
    export class $Conversion$NoConversion<T> extends $Record implements $Conversion<T> {
        convert(arg0: $Level_, arg1: T, arg2: $Player | null): $Conversion$ConversionResult<T>;
        predicate(): $Predicate<T>;
        finish(arg0: T): $Conversion$ConversionResult$Finish<T>;
        isInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        pass(arg0: T): $Conversion$ConversionResult$Pass<T>;
        isChildInstance<U, S extends U>(arg0: U, arg1: $Class<S>): boolean;
        supplyPass(arg0: T): $Supplier<$Conversion$ConversionResult<T>>;
        constructor(predicate: $Predicate_<T>);
    }
    /**
     * Values that may be interpreted as {@link $Conversion$NoConversion}.
     */
    export type $Conversion$NoConversion_<T> = { predicate?: $Predicate_<any>,  } | [predicate?: $Predicate_<any>, ];
    export class $GoldHelper$RegisterGoldItemConversionEvent extends $Conversion$RegisterConversionEvent<$Item> {
    }
}
