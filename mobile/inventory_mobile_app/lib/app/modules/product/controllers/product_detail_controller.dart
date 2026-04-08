import 'package:get/get.dart';
import '../../../data/models/product_model.dart';
import '../../../data/providers/api_provider.dart';

class ProductDetailController extends GetxController {
  final ApiProvider apiProvider;

  ProductDetailController(this.apiProvider);

  var product = Rxn<Product>();
  var isLoading = false.obs;

  late int productId;

  @override
  void onInit() {
    super.onInit();

    productId = Get.arguments as int;
    fetchDetail();
  }

  Future<void> fetchDetail() async {
    try {
      isLoading(true);
      product.value = await apiProvider.getProductDetail(productId);
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
