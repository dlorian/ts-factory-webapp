const socket = io.connect();

const TsOptions = {
    template: '#ts-options-template',
    data() {
        return {
            start: '',
            end: '',
            granularity: 'DAILY',
            format: 'json',
            dst: '2424',
            errors: [],
        };
    },

    methods: {
        create() {
            this.errors = [];

            if (!this.start) {
                this.errors.push('Start date required.');
            }
            if (!this.end) {
                this.errors.push('End date required.');
            }

            if(this.errors.length == 0) {
                console.log('emit create ts event');
                socket.emit('ts-create', this.$data);
            } else {
                console.log('ts-options with errors');
            }
        }
    }
};

const TsResult = {
    template: '#ts-result-template',
    data() {
        return {
            result: ''
        };
    },

    created() {
        socket.on('ts-data', data => this.result += data);
        socket.on('ts-error', err => {
            console.dir(err);
            this.result = err;
        });
    },

    methods: {
        clear() {
            this.result = '';
        }
    }
};

new Vue({
    el: '#app',
    components: {
        'my-ts-options': TsOptions,
        'my-ts-result': TsResult
    }
});
