export class OrderDto {
    constructor(
        public buyerMail: string,
        public productName: string,
        public quantity: number
    ) { }
}