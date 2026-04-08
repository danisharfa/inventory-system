import 'package:get/get.dart';
import '../../../data/providers/api_provider.dart';
import '../controllers/product_list_controller.dart';

class ProductListBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());

    Get.lazyPut<ProductListController>(
      () => ProductListController(Get.find<ApiProvider>()),
    );
  }
}
