/* Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */
var app = new Vue(
    {
        el: "#root",
        data: {
            listaMail: []
        },
        created: function() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (
                    (result) => {
                        console.log(result.data.response);
                        this.listaMail.push(result.data.response);
                        console.log(this.listaMail);
                    }
                );
        }
    }
);