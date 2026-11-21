import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $StructureSectionClaim } from "@package/com/faboslav/structurify/common/world/level/structure";
import { $StructureNamespaceData, $StructureData } from "@package/com/faboslav/structurify/common/config/data";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map } from "@package/java/util";
import { $Heightmap$Types, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";

declare module "@package/com/faboslav/structurify/common/api" {
    export class $StructurifyChunkGenerator {
    }
    export interface $StructurifyChunkGenerator {
        structurify$getFlatnessChecks(): $Map<number, boolean>;
        structurify$getOverlapChecks(): $Map<number, boolean>;
        structurify$getStructureChecks(): $Map<number, boolean>;
        structurify$getBiomeChecks(): $Map<number, boolean>;
        structurify$getStructureSectionClaims(): $Map<number, $StructureSectionClaim>;
    }
    export class $StructurifyStructurePlacement {
    }
    export interface $StructurifyStructurePlacement extends $StructurifyWithStructureSet {
        structurify$getOriginalSalt(): number;
        structurify$getOriginalFrequency(): number;
    }
    export class $StructurifyRandomSpreadStructurePlacement {
    }
    export interface $StructurifyRandomSpreadStructurePlacement extends $StructurifyStructurePlacement {
        structurify$getOriginalSeparation(): number;
        structurify$getOriginalSpacing(): number;
    }
    export class $StructurifyStructureSelectionEntry {
    }
    export interface $StructurifyStructureSelectionEntry extends $StructurifyWithStructureSet {
        structurify$getOriginalWeight(): number;
    }
    export class $StructurifyWithStructureSet {
    }
    export interface $StructurifyWithStructureSet {
        structurify$getStructureSetId(): string;
        structurify$setStructureSetId(arg0: string): void;
    }
    export class $StructurifyStructure {
    }
    export interface $StructurifyStructure {
        structurify$getGlobalStructureNamespaceData(): $StructureNamespaceData;
        structurify$getStructureData(): $StructureData;
        structurify$getStructureData(arg0: $ResourceLocation_): $StructureData;
        structurify$setStructureBiomes(arg0: $HolderSet_<$Biome>): void;
        structurify$getStructureBiomes(): $HolderSet<$Biome>;
        structurify$getStructureBlacklistedBiomes(): $HolderSet<$Biome>;
        structurify$getStructureResourceLocation(): $ResourceLocation;
        structurify$setStructureBlacklistedBiomes(arg0: $HolderSet_<$Biome>): void;
        structurify$setStructureResourceLocation(arg0: $ResourceLocation_): void;
        structurify$getStructureNamespaceData(arg0: $ResourceLocation_): $StructureNamespaceData;
        structurify$getStructureNamespaceData(): $StructureNamespaceData;
    }
    export class $StructurifyJigsawStructure {
    }
    export interface $StructurifyJigsawStructure extends $StructurifyStructure {
        invalidateStructureJigsawData(): void;
        structurify$setMaxDepth(arg0: number): void;
        structurify$setStartHeight(arg0: $HeightProvider): void;
        structurify$getStartHeight(arg0: $HeightProvider): $HeightProvider;
        structurify$getStartHeight(): $HeightProvider;
        structurify$getMaxDepth(arg0: number): number;
        structurify$getMaxDepth(): number;
        structurify$getProjectStartToHeightmap(arg0: ($Heightmap$Types_) | undefined): ($Heightmap$Types) | undefined;
        structurify$getProjectStartToHeightmap(): ($Heightmap$Types) | undefined;
        structurify$setProjectStartToHeightmap(arg0: ($Heightmap$Types_) | undefined): void;
        structurify$getMaxDistanceFromCenter(arg0: number): number;
        structurify$getMaxDistanceFromCenter(): number;
        structurify$setMaxDistanceFromCenter(arg0: number): void;
    }
}
