import { $Timer } from "@package/com/denfop/utils";
import { $ISatellite, $IPlanet, $IBaseResource, $IBody, $IAsteroid } from "@package/com/denfop/api/space";
import { $IResearchTable, $IRocketLaunchPad } from "@package/com/denfop/api/space/research/api";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IRovers } from "@package/com/denfop/api/space/rovers/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RocketPadUnLoadEvent, $ResearchTableLoadEvent, $RocketPadLoadEvent, $ResearchTableUnLoadEvent } from "@package/com/denfop/api/space/research/event";
import { $WorldSavedDataIU } from "@package/com/denfop/events";
import { $Enum } from "@package/java/lang";
import { $UUID, $List, $Map_, $Map, $UUID_ } from "@package/java/util";
import { $ServerStoppingEvent, $ServerStoppedEvent } from "@package/net/neoforged/neoforge/event/server";
import { $LevelEvent$Unload, $LevelEvent$Save } from "@package/net/neoforged/neoforge/event/level";
import { $ServerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";

declare module "@package/com/denfop/api/space/fakebody" {
    export class $Data implements $IData {
        getPercent(): number;
        getBody(): $IBody;
        setInformation(arg0: number): void;
        writeNBT(): $CompoundTag;
        addInformation(arg0: number): void;
        addInformation(): void;
        constructor(arg0: $UUID_, arg1: $IBody);
        constructor(arg0: $CompoundTag_);
        get percent(): number;
        get body(): $IBody;
        set information(value: number);
    }
    export class $SpaceOperation {
        getBody(): $IBody;
        getOperation(): $EnumOperation;
        writeTag(arg0: $CompoundTag_): $CompoundTag;
        getAuto(): boolean;
        setAuto(arg0: boolean): void;
        setOperation(arg0: $EnumOperation_): void;
        constructor(arg0: $IBody, arg1: $CompoundTag_);
        constructor(arg0: $IBody, arg1: $EnumOperation_, arg2: boolean);
        constructor(arg0: $IBody, arg1: $EnumOperation_);
        get body(): $IBody;
    }
    export class $IFakeSatellite {
    }
    export interface $IFakeSatellite extends $IFakeBody {
        getSatellite(): $ISatellite;
        get satellite(): $ISatellite;
    }
    export class $IFakePlayer {
    }
    export interface $IFakePlayer {
        getName(): string;
        matched(arg0: string): boolean;
        getTag(): $CompoundTag;
        writeNBT(): $CompoundTag;
        writeNBT(arg0: $CompoundTag_): $CompoundTag;
        get name(): string;
        get tag(): $CompoundTag;
    }
    export class $IFakeSpaceSystemBase {
    }
    export interface $IFakeSpaceSystemBase {
        unload(): void;
        working(): void;
        copyData(arg0: $Map_<$IBody, $Data>, arg1: $UUID_): void;
        getSpaceTable(arg0: $UUID_): $Map<$IBody, $SpaceOperation>;
        getDataFromUUID(arg0: $UUID_): $Map<$IBody, $Data>;
        getBodyMap(): $Map<$UUID, $List<$IFakeBody>>;
        getLimitTemperatureFromRovers(arg0: $IRovers): number[];
        getRocketPadMap(): $Map<$UUID, $IRocketLaunchPad>;
        getFakePlanetList(): $List<$FakePlanet>;
        addFakeSatellite(arg0: $FakeSatellite): void;
        addFakePlanet(arg0: $FakePlanet): void;
        addFakeAsteroid(arg0: $FakeAsteroid): void;
        getBaseResource(arg0: $FakeSatellite, arg1: number): $List<$IBaseResource>;
        getBaseResource(arg0: $FakePlanet, arg1: number): $List<$IBaseResource>;
        getBaseResource(arg0: $FakeAsteroid, arg1: number): $List<$IBaseResource>;
        addDataBody(arg0: $UUID_, arg1: $Map_<$IBody, $Data>): void;
        getFakeAsteroidList(): $List<$FakeAsteroid>;
        getResearchTableMap(): $Map<$UUID, $IResearchTable>;
        getRoversFromSatellite(arg0: $FakeSatellite): $IRovers;
        getRoversFromAsteroid(arg0: $FakeAsteroid): $IRovers;
        getRoversFromPlanet(arg0: $FakePlanet): $IRovers;
        getFakeSatelliteList(): $List<$FakeSatellite>;
        get bodyMap(): $Map<$UUID, $List<$IFakeBody>>;
        get rocketPadMap(): $Map<$UUID, $IRocketLaunchPad>;
        get fakePlanetList(): $List<$FakePlanet>;
        get fakeAsteroidList(): $List<$FakeAsteroid>;
        get researchTableMap(): $Map<$UUID, $IResearchTable>;
        get fakeSatelliteList(): $List<$FakeSatellite>;
    }
    export class $EnumOperation extends $Enum<$EnumOperation> {
        static values(): $EnumOperation[];
        static valueOf(arg0: string): $EnumOperation;
        static getID(arg0: number): $EnumOperation;
        static SUCCESS: $EnumOperation;
        static WAIT: $EnumOperation;
        static FAIL: $EnumOperation;
    }
    /**
     * Values that may be interpreted as {@link $EnumOperation}.
     */
    export type $EnumOperation_ = "success" | "fail" | "wait";
    export class $FakePlayer implements $IFakePlayer {
        getName(): string;
        matched(arg0: string): boolean;
        getTag(): $CompoundTag;
        writeNBT(): $CompoundTag;
        writeNBT(arg0: $CompoundTag_): $CompoundTag;
        constructor(arg0: string, arg1: $CompoundTag_);
        constructor(arg0: $CompoundTag_);
        get name(): string;
        get tag(): $CompoundTag;
    }
    export class $FakeSatellite implements $IFakeSatellite {
        getResource(): $List<$IBaseResource>;
        getData(): $IData;
        matched(arg0: $IBody): boolean;
        getPlayer(): $UUID;
        getBody(): $IBody;
        writeNBTTagCompound(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getTimerTo(): $Timer;
        resetAuto(): void;
        getRover(): $IRovers;
        getSpaceOperation(): $SpaceOperation;
        getSatellite(): $ISatellite;
        getTimerFrom(): $Timer;
        addBaseResource(arg0: $IBaseResource): void;
        constructor(arg0: $UUID_, arg1: $ISatellite, arg2: $IRovers, arg3: $IData, arg4: $SpaceOperation);
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        get resource(): $List<$IBaseResource>;
        get data(): $IData;
        get player(): $UUID;
        get body(): $IBody;
        get timerTo(): $Timer;
        get rover(): $IRovers;
        get spaceOperation(): $SpaceOperation;
        get satellite(): $ISatellite;
        get timerFrom(): $Timer;
    }
    export class $IFakeBody {
    }
    export interface $IFakeBody {
        getResource(): $List<$IBaseResource>;
        getData(): $IData;
        matched(arg0: $IBody): boolean;
        getPlayer(): $UUID;
        getBody(): $IBody;
        writeNBTTagCompound(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getTimerTo(): $Timer;
        resetAuto(): void;
        getRover(): $IRovers;
        getSpaceOperation(): $SpaceOperation;
        getTimerFrom(): $Timer;
        addBaseResource(arg0: $IBaseResource): void;
        get resource(): $List<$IBaseResource>;
        get data(): $IData;
        get player(): $UUID;
        get body(): $IBody;
        get timerTo(): $Timer;
        get rover(): $IRovers;
        get spaceOperation(): $SpaceOperation;
        get timerFrom(): $Timer;
    }
    export class $IFakePlanet {
    }
    export interface $IFakePlanet extends $IFakeBody {
        getPlanet(): $IPlanet;
        get planet(): $IPlanet;
    }
    export class $FakeAsteroid implements $IFakeAsteroid {
        getResource(): $List<$IBaseResource>;
        getData(): $IData;
        matched(arg0: $IBody): boolean;
        getPlayer(): $UUID;
        getBody(): $IBody;
        writeNBTTagCompound(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getTimerTo(): $Timer;
        resetAuto(): void;
        getRover(): $IRovers;
        getSpaceOperation(): $SpaceOperation;
        getTimerFrom(): $Timer;
        addBaseResource(arg0: $IBaseResource): void;
        getAsteroid(): $IAsteroid;
        constructor(arg0: $UUID_, arg1: $IAsteroid, arg2: $IRovers, arg3: $IData, arg4: $SpaceOperation);
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        get resource(): $List<$IBaseResource>;
        get data(): $IData;
        get player(): $UUID;
        get body(): $IBody;
        get timerTo(): $Timer;
        get rover(): $IRovers;
        get spaceOperation(): $SpaceOperation;
        get timerFrom(): $Timer;
        get asteroid(): $IAsteroid;
    }
    export class $FakeSpaceSystemBase implements $IFakeSpaceSystemBase {
        unload(): void;
        working(): void;
        copyData(arg0: $Map_<$IBody, $Data>, arg1: $UUID_): void;
        getSpaceTable(arg0: $UUID_): $Map<$IBody, $SpaceOperation>;
        getDataFromUUID(arg0: $UUID_): $Map<$IBody, $Data>;
        getBodyMap(): $Map<$UUID, $List<$IFakeBody>>;
        getLimitTemperatureFromRovers(arg0: $IRovers): number[];
        getRocketPadMap(): $Map<$UUID, $IRocketLaunchPad>;
        getFakePlanetList(): $List<$FakePlanet>;
        addFakeSatellite(arg0: $FakeSatellite): void;
        addFakePlanet(arg0: $FakePlanet): void;
        addFakeAsteroid(arg0: $FakeAsteroid): void;
        getBaseResource(arg0: $IFakeBody, arg1: number): $List<$IBaseResource>;
        getBaseResource(arg0: $FakeSatellite, arg1: number): $List<$IBaseResource>;
        getBaseResource(arg0: $FakeAsteroid, arg1: number): $List<$IBaseResource>;
        getBaseResource(arg0: $FakePlanet, arg1: number): $List<$IBaseResource>;
        addDataBody(arg0: $UUID_, arg1: $Map_<$IBody, $Data>): void;
        getFakeAsteroidList(): $List<$FakeAsteroid>;
        getResearchTableMap(): $Map<$UUID, $IResearchTable>;
        getRoversFromSatellite(arg0: $FakeSatellite): $IRovers;
        getRoversFromAsteroid(arg0: $FakeAsteroid): $IRovers;
        getRoversFromPlanet(arg0: $FakePlanet): $IRovers;
        getFakeSatelliteList(): $List<$FakeSatellite>;
        constructor();
        get bodyMap(): $Map<$UUID, $List<$IFakeBody>>;
        get rocketPadMap(): $Map<$UUID, $IRocketLaunchPad>;
        get fakePlanetList(): $List<$FakePlanet>;
        get fakeAsteroidList(): $List<$FakeAsteroid>;
        get researchTableMap(): $Map<$UUID, $IResearchTable>;
        get fakeSatelliteList(): $List<$FakeSatellite>;
    }
    export class $IFakeAsteroid {
    }
    export interface $IFakeAsteroid extends $IFakeBody {
        getAsteroid(): $IAsteroid;
        get asteroid(): $IAsteroid;
    }
    export class $EventHandlerPlanet {
        load(arg0: $ResearchTableLoadEvent): void;
        tick(arg0: $ServerTickEvent$Post): void;
        onSave(arg0: $LevelEvent$Save): void;
        onUnload(arg0: $LevelEvent$Unload): void;
        onServerStopped(arg0: $ServerStoppedEvent): void;
        onServerStopping(arg0: $ServerStoppingEvent): void;
        unLoad(arg0: $ResearchTableUnLoadEvent): void;
        unLoadRocketPad(arg0: $RocketPadUnLoadEvent): void;
        loadRocketPad(arg0: $RocketPadLoadEvent): void;
        static data: $WorldSavedDataIU;
        constructor();
    }
    export class $IData {
    }
    export interface $IData {
        getPercent(): number;
        setInformation(arg0: number): void;
        addInformation(): void;
        addInformation(arg0: number): void;
        get percent(): number;
        set information(value: number);
    }
    export class $FakePlanet implements $IFakePlanet {
        getResource(): $List<$IBaseResource>;
        getData(): $IData;
        matched(arg0: $IBody): boolean;
        getPlayer(): $UUID;
        getBody(): $IBody;
        writeNBTTagCompound(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getTimerTo(): $Timer;
        resetAuto(): void;
        getRover(): $IRovers;
        getPlanet(): $IPlanet;
        getSpaceOperation(): $SpaceOperation;
        getTimerFrom(): $Timer;
        addBaseResource(arg0: $IBaseResource): void;
        constructor(arg0: $UUID_, arg1: $IPlanet, arg2: $IRovers, arg3: $IData, arg4: $SpaceOperation);
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        get resource(): $List<$IBaseResource>;
        get data(): $IData;
        get player(): $UUID;
        get body(): $IBody;
        get timerTo(): $Timer;
        get rover(): $IRovers;
        get planet(): $IPlanet;
        get spaceOperation(): $SpaceOperation;
        get timerFrom(): $Timer;
    }
}
