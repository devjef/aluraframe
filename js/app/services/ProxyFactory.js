class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get(target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function() {
                        console.log(`Alteração usando o método ${prop} interceptada`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return retorno;
                    }
                }

                return Reflect.get(target, prop, receiver)
            },

            set(target, prop, value, receiver) {

                let retorno = target[prop] = value;
                if (props.includes(prop)) acao(target);
                return retorno;

                return Reflect.set(target, prop, value, receiver);
            }

        });
    }

    static _ehFuncao(func) {

        if (typeof(func) == typeof(Function)) {
            return func
        }
    }
}