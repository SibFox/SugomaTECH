import { $Supplier_, $Function_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $MetricSampler, $ProfilerMeasured } from "@package/net/minecraft/util/profiling/metrics";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_, $Executor, $ThreadFactory } from "@package/java/util/concurrent";
import { $AutoCloseable, $Thread, $Runnable_, $Runnable, $Exception } from "@package/java/lang";
import { $Queue, $List } from "@package/java/util";

declare module "@package/net/minecraft/util/thread" {
    export class $ReentrantBlockableEventLoop<R extends $Runnable> extends $BlockableEventLoop<R> {
        runningTask(): boolean;
        constructor(name: string);
    }
    export class $StrictQueue$FixedPriorityQueue implements $StrictQueue<$StrictQueue$IntRunnable, $Runnable> {
        size(): number;
        isEmpty(): boolean;
        push(value: $StrictQueue$IntRunnable): boolean;
        pop(): $Runnable;
        constructor(size: number);
        get empty(): boolean;
    }
    export class $ProcessorMailbox<T> implements $ProfilerMeasured, $ProcessorHandle<T>, $AutoCloseable, $Runnable {
        tell(task: T): void;
        name(): string;
        run(): void;
        size(): number;
        close(): void;
        static create(dispatcher: $Executor_, name: string): $ProcessorMailbox<$Runnable>;
        profiledMetrics(): $List<$MetricSampler>;
        hasWork(): boolean;
        runAll(): void;
        ask<Source>(task: $Function_<$ProcessorHandle<Source>, T>): $CompletableFuture<Source>;
        askEither<Source>(task: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, T>): $CompletableFuture<Source>;
        constructor(queue: $StrictQueue<T, $Runnable_>, dispatcher: $Executor_, name: string);
    }
    export class $StrictQueue<T, F> {
    }
    export interface $StrictQueue<T, F> {
        size(): number;
        isEmpty(): boolean;
        push(value: T): boolean;
        pop(): F;
        get empty(): boolean;
    }
    export class $StrictQueue$QueueStrictQueue<T> implements $StrictQueue<T, T> {
        size(): number;
        isEmpty(): boolean;
        push(value: T): boolean;
        pop(): T;
        constructor(queue: $Queue<T>);
        get empty(): boolean;
    }
    export class $ProcessorHandle<Msg> {
        static of<Msg>(name: string, task: $Consumer_<Msg>): $ProcessorHandle<Msg>;
    }
    export interface $ProcessorHandle<Msg> extends $AutoCloseable {
        tell(task: Msg): void;
        name(): string;
        close(): void;
        ask<Source>(task: $Function_<$ProcessorHandle<Source>, Msg>): $CompletableFuture<Source>;
        askEither<Source>(task: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, Msg>): $CompletableFuture<Source>;
    }
    export class $BlockableEventLoop<R extends $Runnable> implements $ProfilerMeasured, $ProcessorHandle<R>, $Executor {
        tell(task: R): void;
        name(): string;
        execute(task: $Runnable_): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        managedBlock(isDone: $BooleanSupplier_): void;
        submit<V>(supplier: $Supplier_<V>): $CompletableFuture<V>;
        submit(task: $Runnable_): $CompletableFuture<void>;
        scheduleExecutables(): boolean;
        getPendingTasksCount(): number;
        pollTask(): boolean;
        shouldRun(runnable: R): boolean;
        runAllTasks(): void;
        dropAllTasks(): void;
        getRunningThread(): $Thread;
        wrapRunnable(runnable: $Runnable_): R;
        executeBlocking(task: $Runnable_): void;
        executeIfPossible(task: $Runnable_): void;
        profiledMetrics(): $List<$MetricSampler>;
        submitAsync(task: $Runnable_): $CompletableFuture<void>;
        waitForTasks(): void;
        isSameThread(): boolean;
        doRunTask(task: R): void;
        close(): void;
        ask<Source>(task: $Function_<$ProcessorHandle<Source>, R>): $CompletableFuture<Source>;
        askEither<Source>(task: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, R>): $CompletableFuture<Source>;
        constructor(name: string);
        get pendingTasksCount(): number;
        get runningThread(): $Thread;
        get sameThread(): boolean;
    }
    export class $StrictQueue$IntRunnable implements $Runnable {
        run(): void;
        getPriority(): number;
        priority: number;
        constructor(priority: number, task: $Runnable_);
    }
    export class $NamedThreadFactory implements $ThreadFactory {
        newThread(task: $Runnable_): $Thread;
        constructor(namePrefix: string);
    }
}
