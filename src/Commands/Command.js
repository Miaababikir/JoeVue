class Command {

    constructor() {
        /**
         * The name and signature of the console command.
         *
         * @var string
         */
        this.signature = "";

        /**
         * The console command description.
         *
         * @var string
         */
        this.description = "";
    }

    /**
     * Execute the console command.
     */
    execute() {};
}

module.exports = {Command};