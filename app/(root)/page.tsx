
import ProductList from '@/components/shared/header/product/product-list';
import sampleData from '@/db/sample-data'
import { getLatestProducts } from '@/lib/actions/product.actions';

const Hompage = async () => {
  
  const latestProducts = await getLatestProducts()


  return <>
          <ProductList data={latestProducts} title="Newest Arrival" limit={4}/>
        </>;
};

export default Hompage;
