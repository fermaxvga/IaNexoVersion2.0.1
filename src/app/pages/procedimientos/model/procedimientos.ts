export class Procedimiento{
    updated_at(updated_at: any): any {
      throw new Error('Method not implemented.');
    }
    created_at(created_at: any) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public id: number, 
        public titulo: string,
        public comentario: string,
        public categorias: any,
        public documento: string 
    ){}
}