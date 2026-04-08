import 'package:get/get.dart';
import '../../../data/providers/api_provider.dart';
import '../controllers/product_detail_controller.dart';

class ProductDetailBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());

    Get.lazyPut<ProductDetailController>(
      () => ProductDetailController(Get.find<ApiProvider>()),
    );
  }
}
