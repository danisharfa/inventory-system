import 'package:get/get.dart';
import '../modules/product/views/product_list_view.dart';
import '../modules/product/views/product_detail_view.dart';
import '../modules/product/bindings/product_list_binding.dart';
import '../modules/product/bindings/product_detail_binding.dart';
import 'app_routes.dart';

class AppPages {
  static final pages = [
    GetPage(
      name: Routes.PRODUCT,
      page: () => ProductListView(),
      binding: ProductListBinding(),
    ),
    GetPage(
      name: Routes.PRODUCT_DETAIL,
      page: () => ProductDetailView(),
      binding: ProductDetailBinding(),
    ),
  ];
}
