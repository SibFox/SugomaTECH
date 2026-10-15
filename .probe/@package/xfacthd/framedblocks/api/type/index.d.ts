import { $SideSkipPredicate } from "@package/xfacthd/framedblocks/api/predicate/cull";
import { $FullFacePredicate } from "@package/xfacthd/framedblocks/api/predicate/fullface";
import { $ShapeProvider } from "@package/xfacthd/framedblocks/api/shapes";
import { $ConTexMode, $ConnectionPredicate } from "@package/xfacthd/framedblocks/api/predicate/contex";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ImmutableList } from "@package/com/google/common/collect";

declare module "@package/xfacthd/framedblocks/api/type" {
    export class $IBlockType {
    }
    export interface $IBlockType {
        getName(): string;
        compareTo(arg0: $IBlockType): number;
        getSideSkipPredicate(): $SideSkipPredicate;
        supportsWaterLogging(): boolean;
        canOccludeWithSolidCamo(): boolean;
        allowMakingIntangible(): boolean;
        getFullFacePredicate(): $FullFacePredicate;
        getConnectionPredicate(): $ConnectionPredicate;
        supportsConnectedTextures(): boolean;
        canLockState(): boolean;
        generateShapes(arg0: $ImmutableList<$BlockState_>): $ShapeProvider;
        consumesTwoCamosInCamoApplicationRecipe(): boolean;
        hasSpecialHitbox(): boolean;
        isDoubleBlock(): boolean;
        hasBlockItem(): boolean;
        hasSpecialTile(): boolean;
        generateOcclusionShapes(arg0: $ImmutableList<$BlockState_>, arg1: $ShapeProvider): $ShapeProvider;
        getMinimumConTexMode(): $ConTexMode;
        get name(): string;
        get sideSkipPredicate(): $SideSkipPredicate;
        get fullFacePredicate(): $FullFacePredicate;
        get connectionPredicate(): $ConnectionPredicate;
        get doubleBlock(): boolean;
        get minimumConTexMode(): $ConTexMode;
    }
}
