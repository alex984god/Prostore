import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
.string()
.refine((value) => /^\d+(\.\d{2})?/.test(formatNumberWithDecimal(Number(value))),
'Price must have exactly two decimals places');

export const  insertProductSchema = z.object({
    name:z.string().min(3, 'Name must be at least 3 charatcters'),
    slug:z.string().min(3, 'Slug must be at least 3 charatcters'),
    category:z.string().min(3, 'Category must be at least 3 charatcters'),
    brand:z.string().min(3, 'Brand must be at least 3 charatcters'),
    description:z.string().min(3, 'Description must be at least 3 charatcters'),
    stock:z.coerce.number(),
    images:z.array(z.string()).min(1, 'Product must have at least on image'),
    isFeatured:z.boolean(),
    banner:z.string().nullable(),
    price:currency
})

