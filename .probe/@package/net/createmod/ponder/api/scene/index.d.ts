import { $Level } from "@package/net/minecraft/world/level";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $PonderPalette_, $ParticleEmitter, $ParticleEmitter_ } from "@package/net/createmod/ponder/api";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Outliner, $Outline$OutlineParams } from "@package/net/createmod/catnip/outliner";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Predicate, $Supplier_, $Function_, $Consumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Vec3i } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AnimatedSceneElement, $EntityElement, $MinecartElement, $ParrotElement, $WorldSectionElement, $InputElementBuilder, $MinecartElement$MinecartConstructor_, $TextElementBuilder, $ParrotPose, $ElementLink } from "@package/net/createmod/ponder/api/element";
import { $Pointing_ } from "@package/net/createmod/catnip/math";
import { $PonderInstruction } from "@package/net/createmod/ponder/foundation/instruction";
import { $Class, $Object, $Iterable } from "@package/java/lang";
import { $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/createmod/ponder/api/scene" {
    export class $PonderStoryBoard {
    }
    export interface $PonderStoryBoard {
        program(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
    }
    /**
     * Values that may be interpreted as {@link $PonderStoryBoard}.
     */
    export type $PonderStoryBoard_ = ((arg0: $SceneBuilder, arg1: $SceneBuildingUtil) => void);
    export class $OverlayInstructions {
    }
    export interface $OverlayInstructions {
        showBigLine(arg0: $PonderPalette_, arg1: $Vec3_, arg2: $Vec3_, arg3: number): void;
        showScrollInput(arg0: $Vec3_, arg1: $Direction_, arg2: number): void;
        chaseBoundingBoxOutline(arg0: $PonderPalette_, arg1: $Object, arg2: $AABB_, arg3: number): void;
        showFilterSlotInput(arg0: $Vec3_, arg1: $Direction_, arg2: number): void;
        showFilterSlotInput(arg0: $Vec3_, arg1: number): void;
        showOutlineWithText(arg0: $Selection, arg1: number): $TextElementBuilder;
        showLine(arg0: $PonderPalette_, arg1: $Vec3_, arg2: $Vec3_, arg3: number): void;
        showText(arg0: number): $TextElementBuilder;
        showOutline(arg0: $PonderPalette_, arg1: $Object, arg2: $Selection, arg3: number): void;
        showRepeaterScrollInput(arg0: $BlockPos_, arg1: number): void;
        showControls(arg0: $Vec3_, arg1: $Pointing_, arg2: number): $InputElementBuilder;
        showCenteredScrollInput(arg0: $BlockPos_, arg1: $Direction_, arg2: number): void;
    }
    export class $EffectInstructions {
    }
    export interface $EffectInstructions {
        simpleParticleEmitter<T extends $ParticleOptions>(arg0: T, arg1: $Vec3_): $ParticleEmitter;
        emitParticles(arg0: $Vec3_, arg1: $ParticleEmitter_, arg2: number, arg3: number): void;
        particleEmitterWithinBlockSpace<T extends $ParticleOptions>(arg0: T, arg1: $Vec3_): $ParticleEmitter;
        createRedstoneParticles(arg0: $BlockPos_, arg1: number, arg2: number): void;
        indicateSuccess(arg0: $BlockPos_): void;
        indicateRedstone(arg0: $BlockPos_): void;
    }
    export class $SceneBuilder {
    }
    export interface $SceneBuilder {
        debug(): $DebugInstructions;
        idle(arg0: number): void;
        title(arg0: string, arg1: string): void;
        overlay(): $OverlayInstructions;
        world(): $WorldInstructions;
        addKeyframe(): void;
        special(): $SpecialInstructions;
        effects(): $EffectInstructions;
        setNextUpEnabled(arg0: boolean): void;
        getScene(): $PonderScene;
        addInstruction(arg0: $Consumer_<$PonderScene>): void;
        addInstruction(arg0: $PonderInstruction): void;
        setSceneOffsetY(arg0: number): void;
        addLazyKeyframe(): void;
        showBasePlate(): void;
        markAsFinished(): void;
        configureBasePlate(arg0: number, arg1: number, arg2: number): void;
        removeShadow(): void;
        scaleSceneView(arg0: number): void;
        idleSeconds(arg0: number): void;
        rotateCameraY(arg0: number): void;
        set nextUpEnabled(value: boolean);
        get scene(): $PonderScene;
        set sceneOffsetY(value: number);
    }
    export class $Selection {
    }
    export interface $Selection extends $Iterable<$BlockPos>, $Predicate<$BlockPos> {
        add(arg0: $Selection): $Selection;
        copy(): $Selection;
        getCenter(): $Vec3;
        makeOutline(arg0: $Outliner, arg1: $Object): $Outline$OutlineParams;
        makeOutline(arg0: $Outliner): $Outline$OutlineParams;
        substract(arg0: $Selection): $Selection;
        get center(): $Vec3;
    }
    export class $SceneBuildingUtil {
    }
    export interface $SceneBuildingUtil {
        select(): $SelectionUtil;
        grid(): $PositionUtil;
        vector(): $VectorUtil;
    }
    export class $WorldInstructions {
    }
    export interface $WorldInstructions {
        makeSectionIndependent(arg0: $Selection): $ElementLink<$WorldSectionElement>;
        showIndependentSection(arg0: $Selection, arg1: $Direction_): $ElementLink<$WorldSectionElement>;
        toggleRedstonePower(arg0: $Selection): void;
        modifyBlockEntityNBT(arg0: $Selection, arg1: $Class<$BlockEntity>, arg2: $Consumer_<$CompoundTag>, arg3: boolean): void;
        modifyBlockEntityNBT(arg0: $Selection, arg1: $Class<$BlockEntity>, arg2: $Consumer_<$CompoundTag>): void;
        hideIndependentSection(arg0: $ElementLink<$WorldSectionElement>, arg1: $Direction_): void;
        configureCenterOfRotation(arg0: $ElementLink<$WorldSectionElement>, arg1: $Vec3_): void;
        createEntity(arg0: $Function_<$Level, $Entity>): $ElementLink<$EntityElement>;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean): void;
        destroyBlock(arg0: $BlockPos_): void;
        replaceBlocks(arg0: $Selection, arg1: $BlockState_, arg2: boolean): void;
        restoreBlocks(arg0: $Selection): void;
        setBlocks(arg0: $Selection, arg1: $BlockState_, arg2: boolean): void;
        configureStabilization(arg0: $ElementLink<$WorldSectionElement>, arg1: $Vec3_): void;
        getHolderLookupProvider(): $HolderLookup$Provider;
        showSectionAndMerge(arg0: $Selection, arg1: $Direction_, arg2: $ElementLink<$WorldSectionElement>): void;
        modifyBlocks(arg0: $Selection, arg1: $UnaryOperator_<$BlockState>, arg2: boolean): void;
        glueBlockOnto(arg0: $BlockPos_, arg1: $Direction_, arg2: $ElementLink<$WorldSectionElement>): void;
        incrementBlockBreakingProgress(arg0: $BlockPos_): void;
        showIndependentSectionImmediately(arg0: $Selection): $ElementLink<$WorldSectionElement>;
        modifyBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $Class<T>, arg2: $Consumer_<T>): void;
        rotateSection(arg0: $ElementLink<$WorldSectionElement>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        createItemEntity(arg0: $Vec3_, arg1: $Vec3_, arg2: $ItemStack_): $ElementLink<$EntityElement>;
        moveSection(arg0: $ElementLink<$WorldSectionElement>, arg1: $Vec3_, arg2: number): void;
        modifyBlock(arg0: $BlockPos_, arg1: $UnaryOperator_<$BlockState>, arg2: boolean): void;
        showSection(arg0: $Selection, arg1: $Direction_): void;
        hideSection(arg0: $Selection, arg1: $Direction_): void;
        modifyEntity(arg0: $ElementLink<$EntityElement>, arg1: $Consumer_<$Entity>): void;
        modifyEntities<T extends $Entity>(arg0: $Class<T>, arg1: $Consumer_<T>): void;
        cycleBlockProperty(arg0: $BlockPos_, arg1: $Property<never>): void;
        modifyEntitiesInside<T extends $Entity>(arg0: $Class<T>, arg1: $Selection, arg2: $Consumer_<T>): void;
        get holderLookupProvider(): $HolderLookup$Provider;
    }
    export class $SpecialInstructions {
    }
    export interface $SpecialInstructions {
        movePointOfInterest(arg0: $Vec3_): void;
        movePointOfInterest(arg0: $BlockPos_): void;
        moveCart(arg0: $ElementLink<$MinecartElement>, arg1: $Vec3_, arg2: number): void;
        rotateCart(arg0: $ElementLink<$MinecartElement>, arg1: number, arg2: number): void;
        createCart(arg0: $Vec3_, arg1: number, arg2: $MinecartElement$MinecartConstructor_): $ElementLink<$MinecartElement>;
        createBirb(arg0: $Vec3_, arg1: $Supplier_<$ParrotPose>): $ElementLink<$ParrotElement>;
        moveParrot(arg0: $ElementLink<$ParrotElement>, arg1: $Vec3_, arg2: number): void;
        hideElement<T extends $AnimatedSceneElement>(arg0: $ElementLink<T>, arg1: $Direction_): void;
        changeBirbPose(arg0: $ElementLink<$ParrotElement>, arg1: $Supplier_<$ParrotPose>): void;
        rotateParrot(arg0: $ElementLink<$ParrotElement>, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    export class $SelectionUtil {
    }
    export interface $SelectionUtil {
        position(arg0: $BlockPos_): $Selection;
        position(arg0: number, arg1: number, arg2: number): $Selection;
        layer(arg0: number): $Selection;
        layers(arg0: number, arg1: number): $Selection;
        column(arg0: number, arg1: number): $Selection;
        cuboid(arg0: $BlockPos_, arg1: $Vec3i): $Selection;
        everywhere(): $Selection;
        fromTo(arg0: $BlockPos_, arg1: $BlockPos_): $Selection;
        fromTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Selection;
        layersFrom(arg0: number): $Selection;
    }
    export class $VectorUtil {
    }
    export interface $VectorUtil {
        of(arg0: number, arg1: number, arg2: number): $Vec3;
        centerOf(arg0: number, arg1: number, arg2: number): $Vec3;
        centerOf(arg0: $BlockPos_): $Vec3;
        topOf(arg0: $BlockPos_): $Vec3;
        topOf(arg0: number, arg1: number, arg2: number): $Vec3;
        blockSurface(arg0: $BlockPos_, arg1: $Direction_, arg2: number): $Vec3;
        blockSurface(arg0: $BlockPos_, arg1: $Direction_): $Vec3;
    }
    export class $PositionUtil {
    }
    export interface $PositionUtil {
        zero(): $BlockPos;
        at(arg0: number, arg1: number, arg2: number): $BlockPos;
    }
    export class $DebugInstructions {
    }
    export interface $DebugInstructions {
        enqueueCallback(arg0: $Consumer_<$PonderScene>): void;
        addInstructionInstance(arg0: $PonderInstruction): void;
        debugSchematic(): void;
    }
}
