import 'package:get/get.dart';
import '../../../data/models/product_model.dart';
import '../../../data/providers/api_provider.dart';

class ProductListController extends GetxController {
  final ApiProvider apiProvider;

  ProductListController(this.apiProvider);

  var productList = <Product>[].obs;
  var isLoading = false.obs;

  @override
  void onInit() {
    super.onInit();
    
    fetchProducts();
  }

  Future<void> fetchProducts() async {
    try {
      isLoading(true);
      final result = await apiProvider.getProducts();
      productList.assignAll(result);
    } catch (error) {
      Get.snackbar(
        'Error',
        error.toString(),
        snackPosition: SnackPosition.BOTTOM,
      );
    } finally {
      isLoading(false);
    }
  }
}
