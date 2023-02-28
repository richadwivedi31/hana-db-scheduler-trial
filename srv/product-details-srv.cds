using {product.details as my} from '../db/product-details';

service ProductService {

    entity Products as projection on my.Products;
    function top_10_rows() returns Boolean;
}
