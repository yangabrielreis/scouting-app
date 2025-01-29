export default class Scout {
    private _id!: string;
    private _nome!: string;
    private _aceSaque!: number;
    private _quebraSaque!: number;
    private _normalSaque!: number;
    private _erroSaque!: number;
    private _erroBloqueio!: number;
    private _pontoBloqueio!: number;
    private _continuidadeBloqueio!: number;
    private _pontoAtaque!: number;
    private _maisAtaque!: number;
    private _menosAtaque!: number;
    private _erroAtaque!: number;
    private _bloqueioAtaque!: number;
    private _pontoCA!: number;
    private _continuidadeCA!: number;
    private _erroCA!: number;
    private _perfeitaRecepcao!: number;
    private _maisRecepcao!: number;
    private _menosRecepcao!: number;
    private _erroRecepcao!: number;
    private _aceRecepcao!: number;
    private _criadoEm!: Date;


  constructor(
    nome: string,
    aceSaque: number,
    quebraSaque: number,
    normalSaque: number,
    erroSaque: number,
    erroBloqueio: number,
    pontoBloqueio: number,
    continuidadeBloqueio: number,
    pontoAtaque: number,
    maisAtaque: number,
    menosAtaque: number,
    erroAtaque: number,
    bloqueioAtaque: number,
    pontoCA: number,
    continuidadeCA: number,
    erroCA: number,
    perfeitaRecepcao: number,
    maisRecepcao: number,
    menosRecepcao: number,
    erroRecepcao: number,
    aceRecepcao: number,
    criadoEm: Date
  ) {
    this._nome = nome;
    this._aceSaque = aceSaque;
    this._quebraSaque = quebraSaque;
    this._normalSaque = normalSaque;
    this._erroSaque = erroSaque;
    this._erroBloqueio = erroBloqueio;
    this._pontoBloqueio = pontoBloqueio;
    this._continuidadeBloqueio = continuidadeBloqueio;
    this._pontoAtaque = pontoAtaque;
    this._maisAtaque = maisAtaque;
    this._menosAtaque = menosAtaque;
    this._erroAtaque = erroAtaque;
    this._bloqueioAtaque = bloqueioAtaque;
    this._pontoCA = pontoCA;
    this._continuidadeCA = continuidadeCA;
    this._erroCA = erroCA;
    this._perfeitaRecepcao = perfeitaRecepcao;
    this._maisRecepcao = maisRecepcao;
    this._menosRecepcao = menosRecepcao;
    this._erroRecepcao = erroRecepcao;
    this._aceRecepcao = aceRecepcao;
    this._criadoEm = criadoEm;
  }

public get id(): string {
    return this._id;
}

public set id(value: string) {
    this._id = value;
}

public get nome(): string {
    return this._nome;
}

public set nome(value: string) {
    this._nome = value;
}

public get aceSaque(): number {
    return this._aceSaque;
}

public set aceSaque(value: number) {
    this._aceSaque = value;
}

public get quebraSaque(): number {
    return this._quebraSaque;
}

public set quebraSaque(value: number) {
    this._quebraSaque = value;
}

public get normalSaque(): number {
    return this._normalSaque;
}

public set normalSaque(value: number) {
    this._normalSaque = value;
}

public get erroSaque(): number {
    return this._erroSaque;
}

public set erroSaque(value: number) {
    this._erroSaque = value;
}

public get erroBloqueio(): number {
    return this._erroBloqueio;
}

public set erroBloqueio(value: number) {
    this._erroBloqueio = value;
}

public get pontoBloqueio(): number {
    return this._pontoBloqueio;
}

public set pontoBloqueio(value: number) {
    this._pontoBloqueio = value;
}

public get continuidadeBloqueio(): number {
    return this._continuidadeBloqueio;
}

public set continuidadeBloqueio(value: number) {
    this._continuidadeBloqueio = value;
}

public get pontoAtaque(): number {
    return this._pontoAtaque;
}

public set pontoAtaque(value: number) {
    this._pontoAtaque = value;
}

public get maisAtaque(): number {
    return this._maisAtaque;
}

public set maisAtaque(value: number) {
    this._maisAtaque = value;
}

public get menosAtaque(): number {
    return this._menosAtaque;
}

public set menosAtaque(value: number) {
    this._menosAtaque = value;
}

public get erroAtaque(): number {
    return this._erroAtaque;
}

public set erroAtaque(value: number) {
    this._erroAtaque = value;
}

public get bloqueioAtaque(): number {
    return this._bloqueioAtaque;
}

public set bloqueioAtaque(value: number) {
    this._bloqueioAtaque = value;
}

public get pontoCA(): number {
    return this._pontoCA;
}

public set pontoCA(value: number) {
    this._pontoCA = value;
}

public get continuidadeCA(): number {
    return this._continuidadeCA;
}

public set continuidadeCA(value: number) {
    this._continuidadeCA = value;
}

public get erroCA(): number {
    return this._erroCA;
}

public set erroCA(value: number) {
    this._erroCA = value;
}

public get perfeitaRecepcao(): number {
    return this._perfeitaRecepcao;
}

public set perfeitaRecepcao(value: number) {
    this._perfeitaRecepcao = value;
}

public get maisRecepcao(): number {
    return this._maisRecepcao;
}

public set maisRecepcao(value: number) {
    this._maisRecepcao = value;
}

public get menosRecepcao(): number {
    return this._menosRecepcao;
}

public set menosRecepcao(value: number) {
    this._menosRecepcao = value;
}

public get erroRecepcao(): number {
    return this._erroRecepcao;
}

public set erroRecepcao(value: number) {
    this._erroRecepcao = value;
}

public get aceRecepcao(): number {
    return this._aceRecepcao;
}

public set aceRecepcao(value: number) {
    this._aceRecepcao = value;
}

public get criadoEm(): Date {
    return this._criadoEm;
}

public set criadoEm(value: Date) {
    this._criadoEm = value;
}
}