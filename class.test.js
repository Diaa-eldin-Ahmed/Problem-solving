//Scheduling work on .a jobsite.is one .of the.most.difficult tasks in
//.construction management. Different contractors work.on.different
//trades and .can .only .do .so.much .work .in.a .single.day. We.need to
//.make sure that.we.have the.right people.on.the job.site every day
//.and anticipate how-many days .it.will take to complete a.set.of tasks.

//*Requirements :*

/* Your . solution should prefer to finish the.work.as fast.as.possible */

class WorkScheduler {
    workers;

    constructor(workers) {
        this.workers = workers;
    }
    //.Given a suitable trade, returns a list of emails of workers-who .work .the
    // .specified trade.

    // trade : Specific trade-desired
    //.Returns list of worker emails, sorted alphabetically
    suitableWorkers(trade) {
        const suitableWorkers = this.workers.filter((worker)=> worker.trades.includes(trade));
        const sortedEmails  = suitableWorkers.map((worker)=> worker.email).sort();
        console.log(sortedEmails);
        return sortedEmails;
    };

    // .Given a list of trades, return-a list.of worker emails that can.work .that
    //.day. .. A.worker-cannot work.multiple trades in one day, and if there are
    // multiple workers available to work on a particular trade, the worker with
    //the cheapest .cost should .be.chosen.

    //trades : A.list of trades. .. Each trade represents 1 unit of work.that. Needs // to.be.completed
    //Returns .a . list .of.worker . emails .that . are .scheduled for . the .day, .in .the .order
    //that they.were scheduled (i.e. in the same order .that the trades .were
    scheduleOneDay(trades) {
        const tradeToWorker = new Map(); // Map to store trade-worker assignments
        // Sort trades by cost (ascending order)
        const sortedTrades = trades.slice().sort((a, b) => a.cost - b.cost);
        for (const trade in sortedTrades) {
            const {tradeId, workerEmail} = trade;
            if (!tradeToWorker.has(workerEmail)) {
                // Assign worker to trade
                tradeToWorker.set(workerEmail, tradeId);
            }
        }
        const scheduledEmails = trades.map((trade)=> tradeToWorker.get(trade.workerEmail));
        return scheduledEmails;
    };

    
    //.Given a list.of trades, schedules work for each day, until all the trades
    // .are .scheduled. A.worker.cannot work multiple trades in-one day, and if
    // there .are.multiple workers available to work on a particular trade, the
    //.worker .with .the cheapest.cost should-be.chosen.

    //trades : A list of trades. Each trade.represents 1 unit of work that
    //Returns a.list-of scheduled days. Each day is.a list of worker emails for
    // work scheduled for that day.
    scheduleAllTasks(trades) { }

}

const workers = [
    {

        email: "bob@brickwork.com",
        trades: ["brickwork"],
        cost: 90,
    },
    {

        email: "alice@example.com",
        trades: ["brickwork", "drywall"],
        cost: 100,
    },
    {

        email: "charlie@cement.com",
        trades: ["cement"],
        cost: 80,

    },
    {

        email: "wally@walls.com",
        trades: ["cement", -"drywall"],
        cost: 95,

    },

];

const work = new WorkScheduler(workers);
const suitableWorkersForBrickwork = work.suitableWorkers('cement');
// console.log(suitableWorkersForBrickwork); // Display the suitable workers for brickwork

const trades = [
    { tradeId: 1, workerEmail: 'worker1@example.com', cost: 50 },
    { tradeId: 2, workerEmail: 'worker2@example.com', cost: 40 },
];

const scheduledEmails = work.scheduleOneDay(trades);
console.log(work.workers.map((worker)=> worker.trades )); // Replace with your desired output format

// const { WorkScheduler } = require('./your-work-scheduler-file'); // Replace with the actual path to your WorkScheduler class

// describe('simple schedules', () => {
//     let scheduler;

//     beforeEach(() => {
//         scheduler = new WorkScheduler(workers); // Assuming you've already defined the 'workers' array
//     });

//     it('can find a suitable worker for a task', () => {
//         expect(scheduler.suitableWorkers('cement')).toEqual([
//             'charlie@cement.com',
//             'wally@walls.com',
//         ]);
//         expect(scheduler.suitableWorkers('brickwork')).toEqual([
//             'alice@example.com',
//             'bob@brickwork.com',
//         ]);
//         expect(scheduler.suitableWorkers('drywall')).toEqual([
//             'alice@example.com',
//             'wally@walls.com',
//         ]);
//     });

//     it('can build a simple schedule for one day, using the cheapest labor', () => {
//         expect(scheduler.scheduleOneDay(['cement'])).toEqual(['charlie@cement.com']);
//         expect(scheduler.scheduleOneDay(['brickwork'])).toEqual(['bob@brickwork.com']);
//         expect(scheduler.scheduleOneDay(['drywall'])).toEqual(['wally@walls.com']);
//         expect(scheduler.scheduleOneDay(['cement', 'drywall'])).toEqual([
//             'charlie@cement.com',
//             'wally@walls.com',
//         ]);
//         expect(scheduler.scheduleOneDay(['cement', 'brickwork'])).toEqual([
//             // Complete this part with the expected output
//         ]);
//     });
// });

// describe("simple schedules", function() {
// let scheduler;
// beforeEach(function() {
// scheduler = new-WorkScheduler(workers);
// });

// it("can find a suitable worker for a task", function() {
// expect(scheduler.suitableWorkers("cement")).to.eql([
// "charlie@cement.com"
// "wally@walls.com",
// 1);T
// expect(scheduler.suitableWorkers("brickwork")).to.eql([
// "alice@example.com",
// "bob@brickwork.com",
// ]);
// expect(scheduler.suitableWorkers("drywall")).to.eql([
// "alice@example.com",
// "wally@walls.com",

// });

// it("can build a simple schedule for one day, using the cheapest labor",
// function() {
// expect(scheduler. scheduleOneDay(["cement"])).to.eql(["charlie@cement.
// com"]);
// expect(scheduler.scheduleOneDay(["brickwork"])).to.eql([
// "bob@brickwork.com",
// 1);
// expect(scheduler.scheduleOneDay(["drywall"])).to.eql(["wally@walls.com"]);
// expect (scheduler. scheduleOneDay(["cement","drywall"])).to.eql([
// "charlie@cement.com",
// "wally@walls.com",
// 1);
// expect(scheduler.scheduleOneDay(["cement","brickwork"])).to.eql([
