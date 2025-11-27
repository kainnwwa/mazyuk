from django.db import models

class Client(models.Model):
    nickname = models.CharField("Никнейм", max_length=50)
    phone_number = models.CharField("Номер телефона", max_length=20)
    email = models.EmailField("Эл.почта", max_length=100)

    class Meta:
        verbose_name_plural = "Клиенты"
        verbose_name = 'Клиент'

    def __str__(self):
        return f"{self.nickname}" 
    
class Event(models.Model):
    name =  models.CharField("Название", max_length=100)
    date = models.DateField("Дата")
    location = models.CharField("Локация", max_length=100)
    description = models.TextField("Описание", max_length=60)

    class Meta:
        verbose_name_plural = "События"    

    def __str__(self):
        return f"{self.name}" 

class Merchandise(models.Model):
    name = models.CharField("Название", max_length=40)
    photo = models.ImageField("Ссылка на фото", upload_to='merch/')
    size = models.CharField("Размер", max_length=10, blank=True)
    cost = models.DecimalField("Цена", max_digits=10, decimal_places=2)
    quantity = models.IntegerField("Количество")
    merchtype = models.CharField("Тип мерча", max_length=100,)

    class Meta:
        verbose_name_plural = "Мерч"

    def __str__(self):
        return f"{self.name}"

class Order(models.Model):
    payment_status = models.CharField("Статус оплаты", max_length=10)
    number_of_products = models.IntegerField("Количество товаров")
    amount = models.DecimalField("Сумма к оплате", max_digits=10, decimal_places=2)
    adress = models.CharField("Адрес")
    payment_method = models.CharField("Метод оплаты", max_length=50)
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Заказы"    

    def __str__(self):
        return f"{self.id}"  


class Ordering_of_goods(models.Model):
    merchandise_id= models.ForeignKey(Merchandise, on_delete=models.CASCADE)
    number_of_orders= models.IntegerField("Номер заказа")
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Мерч в заказе"    

    def __str__(self):
        return f"{self.id}"  

class Tickets(models.Model):
    event_id= models.ForeignKey(Event, on_delete=models.CASCADE)
    client_id= models.ForeignKey(Client, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Билет"    

    def __str__(self):
        return f"{self.id}"  