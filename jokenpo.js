const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let saudation = `### PEDRA, PAPEL OU TESOURA ###\n`
let questionName = `\nQual é o seu nome?\nR: `;

rl.write(saudation);

rl.question(questionName, name => {
    this.name = name;
    if(!this.name){
        console.log('Informe seu nome para começarmos.');
        return rl.close();
    } else {
        console.log(`Seja bem vindo, ${this.name}`);
    };
    
    let hunch = `\nQual é o seu palpite? (Pedra, Papel, Tesoura)\nR: `;
    
    rl.question(hunch, res => {
        this.res = res;
        console.log(`\nSua resposta foi: ${this.res}`);
        
        if(!this.res){
            console.log('Resposta inválida!');
            return rl.close();
        };
    
        switch (this.res){
            case 'Pedra':
                this.res = 0;
                break;
                
            case'pedra':
                this.res = 0;
                break;
            
            case 'Papel':
                this.res = 1;
                break;
    
            case 'papel':
                this.res = 1;
                break;
    
            case 'Tesoura':
                this.res = 2;
                break;
    
            case 'tesoura':
                this.res = 2;
                break;
    
            default:
                this.res = 'Opção inválida';
                break;
        };
    
        let cpuRes = this.cpuRes;
        let sortValues = Math.random() * 3;
    
        if(sortValues >= 0 && sortValues < 1){
            cpuRes = 0;
            console.log('Resposta da CPU: Pedra');
        }else if(sortValues >= 1 && sortValues < 2){
            cpuRes = 1;
            console.log('Resposta da CPU: Papel');
        }else{
            cpuRes = 2;
            console.log('Resposta da CPU: Tesoura');
        };
    
        const jokenpo = () => {
            if(this.res === 0 && cpuRes === 0){
                console.log('Empate técnico!');
            }else if(this.res === 1 && cpuRes === 1){
                console.log('Empate técnico\n');
            }else if(this.res === 2 && cpuRes === 2){
                console.log('Empate técnico\n');
            }else if(this.res === 0 && cpuRes === 2){
                console.log(`${this.name} venceu!\n`);
            }else if(this.res === 1 && cpuRes === 0){
                console.log(`${this.name} venceu!\n`);
            }else if(this.res === 2 && cpuRes === 1){
                console.log(`${this.name} venceu!\n`);
            }else{
                console.log('CPU venceu!\n');
            };
        };jokenpo();
    
        rl.close();
    });
});
