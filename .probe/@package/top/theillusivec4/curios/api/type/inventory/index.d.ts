import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        grow(arg0: number): void;
        shrink(arg0: number): void;
        getStackInSlot(arg0: number): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        getIdentifier(): string;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): void;
        getSyncTag(): $CompoundTag;
        removeModifier(arg0: $ResourceLocation_): void;
        getSlots(): number;
        getRenders(): $NonNullList<boolean>;
        isVisible(): boolean;
        addTransientModifier(arg0: $AttributeModifier_): void;
        clearModifiers(): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        getCosmeticStacks(): $IDynamicStackHandler;
        getActiveStates(): $NonNullList<boolean>;
        getDropRule(): $ICurio$DropRule;
        canToggleRendering(): boolean;
        hasCosmetic(): boolean;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        updateActiveState(arg0: number): void;
        getCachedModifiers(): $Set<$AttributeModifier>;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        applySyncTag(arg0: $CompoundTag_): void;
        clearCachedModifiers(): void;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get identifier(): string;
        get syncTag(): $CompoundTag;
        get slots(): number;
        get renders(): $NonNullList<boolean>;
        get visible(): boolean;
        get cosmeticStacks(): $IDynamicStackHandler;
        get activeStates(): $NonNullList<boolean>;
        get dropRule(): $ICurio$DropRule;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get sizeShift(): number;
        get permanentModifiers(): $Set<$AttributeModifier>;
    }
}
