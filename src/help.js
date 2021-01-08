const help = (prefixo) => {
	
	return `> *Comandos do bot* <
comando : *autocolante* ou *${prefixo}stiker*
desc : conversor imagem / gif / vídeo em adesivo
utilização : responder imagem/gif/video, ou enviar imagem/gif/video com legenda\n
comando : *${prefixo}sticker nobg* ou *${prefixo}stiker nobg*
desc : converter imagem em autocolante ao remover o fundo
utilização : responder imagem, ou enviar imagem com legenda\n
comando : *${prefixo}toimg*
desc : converter autocolante em imagem
utilização : autocolante de resposta\n
comando : *${prefixo}tsticker* ou *${prefixo}tstiker*
desc : converter texto em autocolante
utilização : *${prefixo}tsticker texto aqui*n
> Comandos de Meme* <
comando : *${prefixo}meme*
desc : imagens meme aleatórias [english]
utilização : basta enviar o comando\n
comando : *${prefixo}memeindo*
desc : imagens meme aleatórias [dentro]
utilização : basta enviar o comando\n
>Outros Comandos* <
comando : *${prefixo}gtts*
desc : converter texto em discurso/áudio
utilização : *${prefixo}gtts [cc] [texto]*exemplo : *${prefixo}gtts ja On2-chan*n
comando : *${prefixo}loli*
desc : imagens loli aleatórias
utilização : basta enviar o comando\n
comando : *${prefixo}nsfwloli*
desc : imagens nsfw loli aleatórias
utilização : basta enviar o comando\n
comando : *${prefixo}url2img*
desc : tirar fotografias de ecrãs da web
utilização : *${prefix}url2img [tipe] [url]*n
comando : *${prefixo}simi*
desc : a sua mensagem será respondida por simi
utilização : *mensagem de aviso do simi*n
comando : *${prefixo}ocr*
desc : tirar o texto da fotografia
utilização : responder imagem, ou enviar imagem com legenda\n
comando : *${prefixo}espere*
desc : procurar anime com imagem [ What Anime Is This/that ]
utilização : responder imagem, ou enviar imagem com legenda\n
comando : *${prefixo}setprefix*
desc : substituir prefixo
utilização : *${prefixo}setprefix [text|optional]*exemplo : *${prefixo}setprefix ?*
nota : Este comando só pode ser usado pelo proprietário do bot\n
>Comandos do Grupo* <
comando : *${prefixo}add*
desc : adicionar membro em grupo
utilização : *${prefixo}add 62813xxxxxxx*n
nota : só pode ser usado quando o bot se torna admin, e aquele que envia o comando é admin!\n
comando : *${prefixo}kick*
desc : chutar membros do grupo
utilização : *kick @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e aquele que envia o comando é admin!\n
comando : *${prefix}promote*
desc : fazer o membro do grupo como administrador do grupo
utilização : *${prefix}promote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e aquele que envia o comando é admin!\n
comando : *${prefixo}demote*
desc : tornar o grupo administrador como membro do grupo
utilização : *${prefixo}demote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e aquele que envia o comando é admin!\n
comando : *${prefix}linkgroup*
desc : tomar a ligação de grupo
utilização : basta enviar o comando
nota : só pode ser usado quando o bot se torna admin, e aquele que envia o comando é admin!\n
comando : *fuga*
desc : Fazer o bot abandonar o grupo
utilização : basta enviar o comando
nota : Só pode ser utilizado pelos administradores do Grupo e pelo proprietário do Bot\n
comando : *${prefixo}tagall*
desc : tags todos os membros do grupo incluindo também os admins
utilização : basta enviar o comando
nota : Este comando pode ser usado se for um administrador de grupo...
comando : *${prefixo}simih*
desc : activar o modo simi no grupo
utilização : *${prefixo}simih 1* para activar o modo simi e *${prefixo}simih 0* para desactivar o modo simi
nota : Este comando pode ser usado se for um administrador de grupo``.
}

exports.help = help
